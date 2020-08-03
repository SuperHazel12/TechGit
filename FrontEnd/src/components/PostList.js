import React from "react";
import { List, Header, Title } from "semantic-ui-react";

export const PostList = ({ posts }) => {
    return(
        <List>
            {posts.map(post => {
                return(
                <List.Item key={post.post_id}>
                    <Header>{post.title}</Header>
                    <p>{post.body}</p>
                </List.Item>
                )
            })}
        </List>
    )
};