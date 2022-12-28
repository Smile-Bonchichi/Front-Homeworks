import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserOneAction } from '../../redux/actions/actions';

function User({ userInfo }) {
    const dispatch = useDispatch();
    
    const getOneUser = (event) => {
        dispatch(fetchUserOneAction(event.target.value));
    };
    
    return (
        <ul>
            <li>name: { userInfo.name }</li>
            <li>email: { userInfo.email }</li>
            <li>
                <button value={ userInfo.id } onClick={ getOneUser }>
                    more info
                </button>
            </li>
        </ul>
    );
}

export default User;