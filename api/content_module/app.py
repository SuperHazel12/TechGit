from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

from resources.content import Post, PostList, PostSubmit, PostVis

# make sure to run [ pip install -r requirements.txt ]

app = Flask(__name__)
app.secret_key = 'keb'
api = Api(app)

# API endpoints for the content_module

# 127.0.0.1:5000/api/
api.add_resource(Post, '/api/post/<int:post_id>')
api.add_resource(PostSubmit, '/api/post/submit')
api.add_resource(PostList, '/api/posts')
api.add_resource(PostVis, '/api/post/v/<int:post_id>')

if __name__ == "__main__":
    app.run(port=5000)
 