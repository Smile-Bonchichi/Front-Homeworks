import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/PostsSlice.js';

export const store = configureStore({
    reducer: {
        postsReducer
    }
});