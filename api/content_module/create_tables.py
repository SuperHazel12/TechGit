import sqlite3

# run [ python create_tables.py ]

connection = sqlite3.connect('data.db')

cursor = connection.cursor()

#Creates the Posts table
create_table = """CREATE TABLE IF NOT EXISTS posts (
    post_id INTEGER PRIMARY KEY,
    post_title varchar(300) NOT NULL,
    post_url varchar,
    post_body varchar(40000),
    post_upvote int DEFAULT 0,
    post_downvote int DEFAULT 0,
    p_edit_counter tinyint DEFAULT 0,
    topic_tag tinyint,
    audience_tag smallint,
    availability_tag varchar,
    is_removed bool DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    removed_at DATETIME 
)"""
cursor.execute(create_table)

#Creates the Comments table
create_table = """CREATE TABLE IF NOT EXISTS comments (
    comment_id INTEGER PRIMARY KEY,
    post_id integer NOT NULL,
    comment_upvote int DEFAULT 0,
    comment_downvote int DEFAULT 0,
    comment_body varchar(10000),
    c_edit_counter tinyint DEFAULT 0,
    is_removed bool DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME,
    removed_at DATETIME,
    FOREIGN KEY (post_id) REFERENCES posts (post_id)
)"""
cursor.execute(create_table)



connection.commit()

connection.close()