from flask import Flask, request, send_file

app = Flask(__name__)

@app.route("/")
def hello_world():
    data = { "name": "John Doe" }
    return data

# post request with formdata including name and image
#
"""
@params: name: str
@params: image: file
@return: success: str
"""
@app.route("/push", methods=["POST"])
def upload():
    name = request.form.get("name")
    image = request.files.get("image")
    return "success"

# post request with json data with name
@app.route("/pop", methods=["POST"])
def get():
    name = request.json.get("name")
    image = request.files.get("image")
    image = open("images/"+image, "rb")
    return send_file(image, mimetype="image/jpeg")


