import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import { UsersListPage } from './pages/usersListPage/UsersListPage';
import { Menu } from './componets/Menu/Menu';

export const App = () => (
    <BrowserRouter>
        <Menu/>
        <Routes>
            <Route index element={ <UserRegisterPage/> }/>
            <Route path="/users" element={ <UsersListPage/> }/>
        </Routes>
    </BrowserRouter>
);
