import React from 'react';

const Postcard = ({post}) => {
    return (
        <div className="border border-amber-500 rounded p-4 m-4  ">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Postcard;