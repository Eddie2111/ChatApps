import threading
import asyncio

from fastapi import FastAPI, File, UploadFile, Request, Depends, Form
from fastapi.middleware.cors import CORSMiddleware

from lib.Mongo_Conn import connect_mongo
from config.CorsData import origins
from Types.StatusPost_Type import StatusPost, Cookie
import redis.asyncio as redis
from fastapi_limiter import FastAPILimiter
from fastapi_limiter.depends import RateLimiter

from bson.objectid import ObjectId # not used
import pprint

# Controllers import here
from controller.statuspost import statusPost

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#
"""
@action : this is startup component
@action : starts up your databases from here
"""
@app.on_event("startup")
async def startup():
    Redis = redis.from_url("redis://localhost:6379", encoding="utf-8", decode_responses=True)
    mongoDB = connect_mongo()
    await FastAPILimiter.init(Redis)

@app.get("/", dependencies=[Depends(RateLimiter(times=10, seconds=5))])
def read_root():
    return {"Hello": "World"}

## post request
"""
@params: item: Item
@params: file: UploadFile = File(...)
@return: get: Items[]
@return: get: FindOne: Items
@return: post: Item
"""

@app.post("/status/command/posts/post", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def Action(status_post: StatusPost):
    #collection = connect_mongo()
    post = {
        "serial": status_post.serial,
        "userId": status_post.userId,
        "post": status_post.post,
        "date": status_post.date,
        "mood": status_post.mood,
        "likes": status_post.likes,
        "comments": status_post.comments,
        "feeling": status_post.feeling,
        "location": status_post.location,
        "tag": status_post.tag}
    # collection.insert_one(post)
    print(post)
    return 'copy that'

@app.get("/status/command/posts/get", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def Action():
    collection = connect_mongo()
    # only get serial, post, data
    posts = []
    for post in collection.find({}, {"_id": 0, "serial": 1, "post": 1, "date": 1, "feeling": 1, "location": 1, "tag": 1, "userId": 1, "mood": 1, "likes": 1, "comments": 1}):
        posts.append(post)
    return posts

# get request
"""
@params : {cookies: {dict.token}}
@action : this component checks the cookies that are received
"""
@app.get("/cookietest", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
def get_cookies(request: Request):
    cookies = request.cookies
    print(cookies)
    return {"cookies": cookies}

# creating an endpoint that can handle file upload and stores it in localhost
"""
 @params : {file: FILE}
 @actions: recieves and stores file on root
"""
@app.post("/uploadfile", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def create_upload_file(
    file: UploadFile = File(...),
    #serial: str = Form(...),
    #user: str = Form(...),
    post: str = Form(...),
    #date: str = Form(...),
    feeling: str = Form(...),
    #location: str = Form(...),
    #tag: str = Form(...)
    ):
    # save the file
    # file_path = f"images/{file.filename}"
    # with open(file_path, "wb") as buffer:
    #     buffer.write(file.file.read())
    # print(serial)
    return {
        'data':'texts uploaded successfully',
        # 'filename': file.filename,
    }

## Whole request structure
"""
routes: /status/command={command}
controller: validation(statusPost)
model: CRUD(StatusPost): True/False
routes -> controller -> model -> controller -> routes
"""

## to run: uvicorn app:app --reload
## to run with uvicorn with custom port: uvicorn app:app --reload --port 3500