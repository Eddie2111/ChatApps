## setup a basic template for fastapi with one get and one post request endpoint
## to run: uvicorn app:app --reload
## to run with gunicorn: gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app

from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
## connecting mongodb
from pymongo import MongoClient
from bson.objectid import ObjectId
import json
import os
import datetime
import time
import random
import string
import requests
import re
import urllib.parse
import base64
import hashlib

app = FastAPI()

## adding cors
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:5000",
]
## connecting mongodb
client = MongoClient('mongodb://localhost:27016/')
db = client['chat']
collection = db['Posts']



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], ## allow all methods
    allow_headers=["*"], ## allow all headers
)


class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None

class StatusPost(BaseModel):
    serial: str
    post: str
    date: str
    ## optional fields
    feeling: Optional[str] = None
    location: Optional[str] = None
    tag: Optional[str] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.post("/status/command={command}")
async def statusPost(status_post: StatusPost, command: str):
    print(command)
    return status_post


## to run: uvicorn app:app --reload
## to run with uvicorn with custom port: uvicorn app:app --reload --port 8000