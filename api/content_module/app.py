from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_jwt import JWT, jwt_required

app = Flask(__name__)
app.secret_key = 'keb'
api = Api(app)

# API endpoints for the content_module

posts = [
    {
    'id': 1,
    'title': 'The Bandaid Solution',
    'hyperlink': None,
    'upvote': 0,
    'downvote': 0,
    'body': 'Do not remove this, else it will crash',
    'edit_counter': 0,
    'topic': 0,
    'audience': 0,
    'availability': 'Online',
    'is_deleted': 0
    }
  ]

class Post(Resource):
    # Parser for updating data to the database, checks for requirements
    parser = reqparse.RequestParser()
    
    parser.add_argument('title',
        required=True,
        help="This field cannot be left blank!"
    )

    parser.add_argument('hyperlink',
        required=False,
    )

    parser.add_argument('body',
        required=True,
        help="This field cannot be left blank!"
    )

    parser.add_argument('availability',
        required=True,
        help="This field cannot be left blank!"
    )

    def get(self, id):
        post = next(filter(lambda x: x['id'] == id, posts), None)
        return {'post': post}, 200 if post else 404 #Success, else Not Found

    def delete(self, id):
        global posts
        posts = list(filter(lambda x: x['id'] != id, posts))
        return {'message': "Post with id '{}' has been successfully removed!".format(id)}

    def patch(self, id):
        data = request.get_json()
        
        post = next(filter(lambda x: x['id'] == id, posts), None)
        if post is None:
            post = {
                'body': data['body'],
                }
            posts.append(post)
        else:
            post.update(data)
        return post

class PostSubmit(Resource):
    def post(self):
        data = Post.parser.parse_args()

        post = {
            'id': posts[-1]['id'] + 1,
            'title': data['title'],
            'hyperlink': data['hyperlink'],
            'body': data['body'],
            'upvote': 0,
            'downvote': 0,
            'edit_counter': 0,
            'topic': 0,
            'audience': 0,
            'availability': data['availability'],
            'is_deleted': 0
            }
        posts.append(post)
        return post, 201

class PostList(Resource):
    def get(self):
        return {'posts': posts}

# 127.0.0.1:5000/api/
api.add_resource(Post, '/api/post/<int:id>')
api.add_resource(PostSubmit, '/api/post/submit')
api.add_resource(PostList, '/api/posts')

if __name__ == "__main__":
    app.run(port=5000)
