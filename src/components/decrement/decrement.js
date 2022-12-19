import React from 'react';
import { useDispatch } from 'react-redux';

export const Decrement = () => {
    const dispatch = useDispatch();
    
    const decrementNumber = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };
    
    return (
        <button onClick={ decrementNumber }>-</button>
    );
};
