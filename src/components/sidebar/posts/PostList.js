import React, { useEffect, useState } from 'react';
import axios from '../../../axios/index.js';
import Post from './post/Post.js';

export default function PostList() {
    const [posts, setPosts] = useState([]);
    
    const getPosts = () => {
        axios.get('/posts').then((res) => {
            setPosts(res);
        });
    };
    
    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <>
            {
                posts.map(p => {
                    return <Post key={ p.id } post={ p }/>;
                })
            }
        </>
    );
}
