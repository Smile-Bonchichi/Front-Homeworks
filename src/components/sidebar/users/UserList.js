import React, { useEffect, useState } from 'react';
import axios from '../../../axios/index.js';
import User from './user/User.js';

function UserList() {
    const [users, setUsers] = useState([]);
    
    const getUsers = () => {
        axios.get('/users').then((res) => {
            setUsers(res);
        });
    };
    
    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <>
            {
                users.map(u => {
                    return <User key={ u.id } user={ u }/>;
                })
            }
        </>
    );
}

export default UserList;