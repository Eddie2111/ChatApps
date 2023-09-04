import threading
import asyncio

from fastapi import FastAPI, File, UploadFile, Request, Depends
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
# !IMPORTANT
# CRTICIAL TESTING REQUIRED
@app.post("/status/command={command}", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def Action(status_post: StatusPost or ' ', command: str):
    action = threading.Thread(target=asyncio.run(statusPost(status_post: StatusPost or ' ', command: str)))

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
@app.post("/uploadfile/", dependencies=[Depends(RateLimiter(times=2, seconds=5))])
async def create_upload_file(file: UploadFile = File(...)):
    # save the file
    with open(file.filename, "wb") as buffer:
        buffer.write(file.file.read())
    return {"filename": file.filename}

## Whole request structure
"""
routes: /status/command={command}
controller: validation(statusPost)
model: CRUD(StatusPost): True/False
routes -> controller -> model -> controller -> routes
"""

## to run: uvicorn app:app --reload
## to run with uvicorn with custom port: uvicorn app:app --reload --port 3500