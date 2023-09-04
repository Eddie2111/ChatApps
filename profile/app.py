from fastapi import FastAPI, File, UploadFile, Request, Depends, Form
from fastapi.middleware.cors import CORSMiddleware

from lib.Mongo_Conn import connect_mongo
from config.CorsData import origins
from Types.StatusPost_Type import StatusPost, Cookie
import redis.asyncio as redis

from fastapi_limiter import FastAPILimiter
from fastapi_limiter.depends import RateLimiter

from bson.objectid import ObjectId
import pprint

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    Redis = redis.from_url("redis://localhost:6379", encoding="utf-8", decode_responses=True)
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
# limiting rules:  ,dependencies=[Depends(RateLimiter(times=2, seconds=5))]
@app.post("/status/post", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def createPost(
        file: UploadFile,
        serial: str = Form(...),
        user: str = Form(...),
        post: str = Form(...),
        date: str = Form(...),
        feeling: str = Form(...),
        location: str = Form(...),
        tag: str = Form(...)
    ):
    connection = connect_mongo()
    # save the file
    file_path = f"images/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())
    print(serial)
    return {
        'data':'texts uploaded successfully',
        'filename': file.filename,
    }

@app.post("/status/get", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def getPost():
    collection = connect_mongo()
    # only get serial, post, data
    posts = [];
    for post in collection.find({}, {"_id": 0, "serial": 1, "post": 1, "date": 1}):
        posts.append(post)
    return posts

# limiting rules: , dependencies=[Depends(RateLimiter(times=2, seconds=5))]
@app.get("/cookietest", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
def get_cookies(request: Request):
    cookies = request.cookies
    print(cookies)
    return {"cookies": cookies}

# creating an endpoint that can handle file upload and stores it in localhost
# limiting rules: , dependencies=[Depends(RateLimiter(times=2, seconds=5))]
@app.post("/uploadfile/", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def create_upload_file(
    file: UploadFile,
    serial: str = Form(...),
    user: str = Form(...),
    post: str = Form(...),
    date: str = Form(...),
    feeling: str = Form(...),
    location: str = Form(...),
    tag: str = Form(...)
    ):
    # save the file
    file_path = f"images/{file.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())
    print(serial)
    return {
        'data':'texts uploaded successfully',
        'filename': file.filename,
    }

## Whole request structure
"""
routes: /status/command={command}
controller: validation(statusPost)
model: CRUD(StatusPost): True/False
routes -> controller -> model -> controller -> routes
"""

print(connect_mongo())


## to run: uvicorn app:app --reload
## to run with uvicorn with custom port: uvicorn app:app --reload --port 3500