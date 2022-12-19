import React from 'react';
import { useDispatch } from 'react-redux';

export const Increment = () => {
    const dispatch = useDispatch();
    
    const incrementNumber = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };
    
    return (
        <button onClick={ incrementNumber }>+</button>
    );
};
