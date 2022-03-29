import React, { useEffect, useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])
    return (
        <div>
            <h2>Every post Facebook {posts.length}</h2>
        </div>
    );
};

export default Posts;