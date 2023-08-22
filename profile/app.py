from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from lib.Mongo_Conn import connect_mongo
from config.CorsData import origins
from Types.StatusPost_Type import StatusPost

from bson.objectid import ObjectId
import pprint

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], ## allow all methods
    allow_headers=["*"], ## allow all headers
)

@app.get("/")
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

@app.post("/status/command={command}")
async def statusPost(status_post: StatusPost, command: str):
    print(command)
    # for post
    if command == "post":
        collection = connect_mongo()
        post = {
            "serial": status_post.serial, 
            "post": status_post.post,
            "date": status_post.date, 
            "feeling": status_post.feeling, 
            "location": status_post.location, 
            "tag": status_post.tag}
        collection.insert_one(post)
        return status_post
    # for get
    elif command == "get":
        collection = connect_mongo()
        # only get serial, post, data
        posts = []
        for post in collection.find({}, {"_id": 0, "serial": 1, "post": 1, "date": 1}):
            posts.append(post)
        return posts
    
## Whole request structure
"""
routes: /status/command={command}
controller: validation(statusPost)
model: CRUD(StatusPost): True/False
routes -> controller -> model -> controller -> routes
"""

print(connect_mongo())


## to run: uvicorn app:app --reload
## to run with uvicorn with custom port: uvicorn app:app --reload --port 8000