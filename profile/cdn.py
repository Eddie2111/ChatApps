import threading
from datetime import datetime

from flask import Flask, request, send_file
from flask_cors import CORS

from functions.randomGenerator import stringGenerator
from functions.StoreFiles import StoreFile

app = Flask(__name__)
CORS(app, resources={r"/*":
                     {"origins": "*",
                      "methods": ["GET", "POST"],
                      "allow_headers": ["Content-Type", "Authorization"]}
                })

@app.route("/")
def hello_world():
    data = { "name": "John Doe" }
    return data

# post request with formdata including name and image
"""
@params: image: file
@return: success: dict -> {serial: str, type: str, name:str}
"""
@app.route("/upload", methods=["POST"])
async def upload()-> dict:
    try:
        image = request.files.get("file")
        serial = stringGenerator()
        threading.Thread(target=await StoreFile(image, serial))
        returning_fileExt = image.filename.split(".")[1]
        return {
            "serial": serial,
            "type": image.content_type,
            "name": image.filename,
            "file_id": serial+"."+returning_fileExt,
            "message": "success",
            "date": str(datetime.now())
        }
    except Exception as e:
        return {
            "message": "error",
            "error": str(e)
        }

# post request with json data with name
@app.route("/get", methods=["POST"])
def get()-> dict:
    serial:str = request.json.get("serial")
    image = request.files.get("image")
    image = open("images/"+image, "rb")
    return send_file(image, mimetype="image/jpeg")


# python -m flask run --app cdn run --port=3700 --reload