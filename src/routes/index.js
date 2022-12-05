import React from 'react';
import PostList from '../components/sidebar/posts/PostList.js';
import UserList from '../components/sidebar/users/UserList.js';
import AlbumList from '../components/sidebar/albums/AlbumList.js';
import TodoList from '../components/sidebar/todos/TodoList.js';
import PhotoList from '../components/sidebar/photos/PhotoList.js';

export const routes = [
    { text: 'Посты', url: '/', element: <PostList/> },
    { text: 'Пользователи', url: '/users', element: <UserList/> },
    { text: 'Альбомы', url: '/albums', element: <AlbumList/> },
    { text: 'TODO', url: '/todos', element: <TodoList/> },
    { text: 'Фотографии', url: '/photos', element: <PhotoList/> }
];
