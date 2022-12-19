import React from 'react';
import { useSelector } from 'react-redux';
import { Increment } from '../../components/increment/Increment.js';
import { Decrement } from '../../components/decrement/decrement.js';

export const MainPage = () => {
    const number = useSelector(state => state.number);
    
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };
    
    return (
        <div style={ style }>
            <h1> { number } </h1>
            
            <Increment/>
            <Decrement/>
        </div>
    );
};
