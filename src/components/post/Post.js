import React from 'react';

function Post({post}) {
    return (
        <div>
            <h2>{post.id}------{post.title}</h2>
        </div>
    );
}

export {Post};