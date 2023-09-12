import threading

from datetime import datetime
from fastapi import APIRouter, Depends, Request, UploadFile, Form
from fastapi_limiter.depends import RateLimiter
from lib.Mongo_Conn import connect_mongo
from controller.statuspost import user_status_post
from functions.tokenDecrypt import getTokenInfo
from bson.objectid import ObjectId

app = APIRouter()

@app.get("/testing/post")
async def root():
    return {
        "message": "Hello World",
        "method": "GET",
        "route": "/index"
    }

@app.post("/testing/post", dependencies=[Depends(RateLimiter(times=1, seconds=5))])
async def root(
    request: Request,
    file: UploadFile,
    post: str = Form(...),
    feeling: str = Form(...),
):
    threading.Thread(target=await PostedDataPush(file, post, feeling, request))
    return {
        "message": "post created successfully",
        "method": "POST",
        "route": "/index"
    }

def StoreFile(file:dict) -> None:
    file_path = f"images/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

async def PostedDataPush(file, post, feeling, request):
    StoreFile(file)
    tokenData = getTokenInfo(str(request.cookies['token']))
    serial = str(ObjectId())
    db_dataset = {
        "serial": serial,
        "userId": tokenData['id'],
        "post": post,
        "date": str(datetime.now()),
        "feeling": feeling,
        "location": "",
        "tag": "",
        'file': file.filename,
    }
    collection = connect_mongo()
    collection.insert_one(db_dataset)
    return db_dataset