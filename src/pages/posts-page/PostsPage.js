import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePosts } from '../../store/slice/PostsSlice.js';
import { Post } from '../../components/post/Post';

export default function PostsPage() {
    const dispatch = useDispatch();
    
    const { posts, preloader, error } =
        useSelector(state => state.postsReducer);
    
    const getPostsFunc = () => {
        dispatch(getPosts());
    };
    
    const clearPosts = () => {
        dispatch(deletePosts());
    };
    
    useEffect(() => {
        getPostsFunc();
    }, []);
    
    return (
        <>
            <button onClick={ getPostsFunc }>get posts</button>
            <button onClick={ clearPosts }>delete all</button>
            {
                preloader ?
                    <h3>loading...</h3> :
                    error ?
                        <h3>{ error }</h3> :
                        posts.map(post =>
                            <Post key={ post.id } postInfo={ post }/>
                        )
            }
        </>
    );
}
