import User from '../../components/users/User.js';
import Button from '@mui/material/Button';
import * as React from 'react';
import { useState } from 'react';
import axios from '../../axios/index.js';
import { number, string } from 'prop-types';
import UserModal from '../../components/users/user-modal/UserModal.js';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState({
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo: {
                lat: number,
                lng: number
            }
        },
        phone: string,
        website: string,
        company: {
            name: string,
            catchPhrase: string,
            bs: string
        }
    });
    
    const getUsers = () => {
        axios.get('/users').then((res) => {
            setUsers(res);
        });
    };
    
    const getUserById = (id) => {
        axios.get(`/users/${ id }`).then((res) => {
            setUser(res);
            
            setOpen(true);
        });
    };
    
    return (
        <div className='wrapper'>
            <div className='left'>
                <h1 className='title'>Users - list</h1>
                
                <Button onClick={ getUsers } variant='outlined' color='success'>
                    Get users
                </Button>
            </div>
            <div className='right'>
                {
                    users.map((value) =>
                        <User onClick={ () => getUserById(value.id) }
                              key={ value.id }
                              user={ value }/>
                    )
                }
                <UserModal user={ user } open={ open } setOpen={ setOpen }/>;
            </div>
        </div>
    );
}
