import React from 'react';


import {Post} from "../post/Post";

function Posts({post}) {
    return (
        <div>
            posts.map(post => <Post key={post.id} post={post}/>)
        </div>
    );
}

export {Posts};