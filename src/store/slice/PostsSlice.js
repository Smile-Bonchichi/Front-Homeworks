import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios/index.js';

export const getPosts = createAsyncThunk(
    'getPosts',
    async (info, { dispatch, rejectWithValue }) => {
        try {
            dispatch(preloaderOn);
            
            axios.get('/posts').then(res => {
                dispatch(postsInfo(res));
            });
        } catch (e) {
            dispatch(setError(e));
        } finally {
            dispatch(preloaderOff());
        }
    }
);

export const getPostById = createAsyncThunk(
    'getPostById',
    async (info, { dispatch, rejectWithValue }) => {
        try {
            dispatch(preloaderOn);
            
            axios.get(`/posts/${ info }`).then(res => {
                dispatch(postInfoById(res));
            });
        } catch (e) {
            dispatch(setError(e));
        } finally {
            dispatch(preloaderOff());
        }
    }
);

export const createPost = createAsyncThunk(
    'createPost',
    async (info, { dispatch, rejectWithValue }) => {
        try {
            dispatch(preloaderOn);
            
            axios.post('/posts', JSON.stringify(info)).then(res => {
                dispatch(setError('post created'));
            });
        } catch (e) {
            dispatch(setError(e));
        } finally {
            dispatch(preloaderOff());
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        post: {},
        posts: [],
        preloader: false,
        error: ''
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload;
            state.error = '';
        },
        postInfoById: (state, action) => {
            state.post = action.payload;
            state.error = '';
        },
        deletePosts: (state) => {
            state.posts = [];
        },
        preloaderOn: (state) => {
            state.preloader = true;
        },
        preloaderOff: (state) => {
            state.preloader = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    postsInfo,
    postInfoById,
    preloaderOn,
    preloaderOff,
    setError,
    deletePosts
} = postsSlice.actions;

export default postsSlice.reducer;