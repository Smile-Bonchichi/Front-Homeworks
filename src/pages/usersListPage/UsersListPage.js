import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/actions.js';

export const UsersListPage = () => {
    const dispatch = useDispatch();
    
    const { users } = useSelector(state => state.usersReducer);
    
    useEffect(() => {
        dispatch(getUsersAction());
    }, []);
    
    return (
        <div>
            <h1>users list</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(x =>
                        <tr key={ x.id }>
                            <td>{ x.id }</td>
                            <td>{ x.name }</td>
                            <td>{ x.username }</td>
                            <td>{ x.email }</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    );
};
