import sqlite3
from flask_restful import Resource, reqparse, request
from flask_jwt import jwt_required

# class for anything related to post. [ /api/post/<int:post_id> ]
class Post(Resource):

    # @jwt_required()
    # GET method to search for a specific post via post_id
    def get(self, post_id):
        post = self.find_by_post_id(post_id)
        if post:
            return post
        return {"message": "Post not found"}, 404

    @classmethod
    # defines the method (that was used above) to find the post using post_id
    def find_by_post_id(cls, post_id):
        # this basically says to connect to data.db, and execute queries there.
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM posts WHERE post_id=?"
        result = cursor.execute(query, (post_id,))

        # stores the fetched query results per column (thus, fetchone) into row.
        row = result.fetchone()

        # ends DB connection so no malicious queries can be executed (I think?)
        connection.close()

        # Column count (column 1) starts at row[0]
        if row:
            return {
                'post_id': row[0],
                'title': row[1],
                'url': row[2],
                'body': row[3],
                'upvotes': row[4],
                'downvotes': row[5],
                'edit_counter': row[6],
                'topic': row[7],
                'audience': row[8],
                'availability': row[9],
                'is_removed': row[10],
                'created_at': row[11],
                'updated_at': row[12],
                'removed_at': row[13]
            }

    def patch(self, post_id):
        # set 'data' to call the request below instead of typing it repeatedly. Shortcuts, my friends.
        data = request.get_json()
    
        post = self.find_by_post_id(post_id)
        
        if post is None:
                return {"message": "Post not found, update failed."}, 404
        else:
            updated_post = {
                'post_id': post_id,
                'post_body': data['post_body'],
                'availability_tag': data['availability_tag']
            }

            # Checks if the post was already edited. If yes, tells the user NOPE, no edit for you.       
            if (post['edit_counter'] >= 1):
                return {"message": "You have already edited this post. You may only edit a post once."}, 403 #Forbidden
            else:
                # Checks if there are no changes in the body. If none, update() won't execute, preventing using the single edit
                # ...leeway. Will add more edit check fields in the future like topic_tag, availability_tag, etc.
                if (post['body'] == data['post_body']):
                     return {"message": "No changes were found and made."}, 201
                else:
                    try:
                        self.update(updated_post)
                    except:
                        return {"message": "An error occurred updating the post."}, 500 #Internal Server Error
        
        return updated_post

    @classmethod
    # the update function that was used above.
    def update(cls, post):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "UPDATE posts SET post_body=?, availability_tag=?, p_edit_counter=p_edit_counter+1, updated_at=CURRENT_TIMESTAMP WHERE post_id=?"
        cursor.execute(query, (post['post_body'], post['availability_tag'], post['post_id']))

        # commit means 'to save', I think. You only need this when you are making changes.
        connection.commit()
        connection.close()

    #FOR TESTING PURPOSES ONLY, DO NOT USE FOR PRODUCTION
    def delete(self, post_id):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "DELETE FROM posts WHERE post_id=?"
        cursor.execute(query, (post_id,))

        connection.commit()
        connection.close()

        return {'message': 'Post deleted. Please tell me this is for testing and not done in production.'}

# class for submitting a post. [ /api/post/submit ]
class PostSubmit(Resource):
    # @jwt_required()

    # Parsers are the validators for checking JSON contents before sending the request.
    parser = reqparse.RequestParser()
    
    parser.add_argument('post_title',
        required=True,
        help="This field cannot be left blank!"
    )

    parser.add_argument('post_url',
        required=False,
    )

    parser.add_argument('post_body',
        required=True,
        help="This field cannot be left blank!"
    )

    parser.add_argument('availability_tag',
        required=True,
        help="This field cannot be left blank!"
    )

    def post(self):
        data = self.parser.parse_args()

        post = {
            'post_title': data['post_title'],
            'post_url': data['post_url'],
            'post_body': data['post_body'],
            'availability_tag': data['availability_tag'],
        }
        
        try:
            self.insert(post)
        except:
            return {"message": "An error occurred inserting the post."}, 500 #Server Internal Error

        return post, 201
    
    @classmethod
    def insert(cls, post):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "INSERT OR IGNORE INTO posts(post_title, post_url, post_body, availability_tag) VALUES (?, ?, ?, ?)"
        cursor.execute(query, (post['post_title'], post['post_url'], post['post_body'], post['availability_tag']))

        connection.commit()
        connection.close()

# class for changing a post's visibility AKA 'deleting'. [ /api/post/v/<int:post_id> ]
class PostVis(Resource):
    # @jwt_required()
    def patch(self, post_id):  
        data = request.get_json()
        post = Post.find_by_post_id(post_id)

        toggle = {
            'post_id': post_id,
            'is_removed': data['is_removed']
        }

        if post is None:
            return {"message": "Post not found"}, 404
        else:
            # makes sure the values that would be accepted are only 0 or 1
            if (data['is_removed'] == 1 or data['is_removed'] == 0):
                try:
                    self.visibleToggle(toggle)
                except:
                    return {"message": "An error occurred inserting the post."}, 500 #Server Internal Error
            else:
                return {"message": "This function only accepts 1 or 0"}, 403
        return {"message": "Post visibility successfully changed, 'is_removed' set to {is_removed}".format(**data)}, 200
        
    @classmethod
    def visibleToggle(cls, post):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "UPDATE posts SET is_removed=?, removed_at=CURRENT_TIMESTAMP WHERE post_id=?"
        cursor.execute(query, (post['is_removed'], post['post_id']))

        connection.commit()
        connection.close()

# class for showing the list of Posts. [ /api/posts ]
class PostList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()

        query = "SELECT * FROM posts"
        result = cursor.execute(query)
        posts = []

        for row in result:
            posts.append({
                'post_id': row[0],
                'title': row[1],
                'url': row[2],
                'body': row[3],
                'upvotes': row[4],
                'downvotes': row[5],
                'edit_counter': row[6],
                'topic': row[7],
                'audience': row[8],
                'availability': row[9],
                'is_removed': row[10],
                'created_at': row[11],
                'updated_at': row[12],
                'removed_at': row[13]
                }
            )

        connection.close()

        return {'posts': posts}