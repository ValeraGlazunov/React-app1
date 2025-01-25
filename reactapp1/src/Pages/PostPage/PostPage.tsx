import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;