from Types.StatusPost_Type import StatusPost, Cookie
from lib.Mongo_Conn import connect_mongo

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
        # collection.insert_one(post)
        # print(post)
        return 'copy that'
    # for get
    elif command == "get":
        collection = connect_mongo()
        # only get serial, post, data
        posts = []
        for post in collection.find({}, {"_id": 0, "serial": 1, "post": 1, "date": 1}):
            posts.append(post)
        return posts