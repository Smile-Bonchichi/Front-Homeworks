import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../redux/actions/actions';
import User from '../../components/user/User';

function UsersPage() {
    const dispatch = useDispatch();
    
    const { user } = useSelector(state => state.usersReducer);
    const { users } = useSelector(state => state.usersReducer);
    
    const getUsers = () => {
        dispatch(fetchUsersAction());
    };
    
    return (
        <div>
            <ul>
                <li>name: { user.name }</li>
                <li>address: { user.address === undefined ? '' : user.address.street }</li>
                <li>email: { user.email }</li>
                <li>username:{ user.username }</li>
            </ul>
            
            <button onClick={ getUsers }>get users</button>
            { users.map(
                (user, index) => <User key={ index } userInfo={ user }/>) }
        
        </div>
    );
}

export default UsersPage;