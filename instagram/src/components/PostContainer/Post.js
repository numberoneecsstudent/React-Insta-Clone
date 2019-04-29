import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Posts.css';

const Post = props => {
    return (
        <div className="post-border">
        <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
        <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={props.post.imageUrl} />
        </div>
        <div className="post-interface">
        <img className='logo' alt='heart' src={heart}/>
        <img className='logo' alt='message icon' src={message}/>
        <img className='logo' alt='share icon' src={share}/>
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default Post;
