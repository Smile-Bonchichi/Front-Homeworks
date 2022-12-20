import React from 'react';
import { useDispatch } from 'react-redux';
import type { PropsNumber } from '../../props/PropsNumber.js';
import { actionType } from '../../redux/reducer.js';

export const Multiply = (props: PropsNumber) => {
    const dispatch = useDispatch();
    
    const multiplyNumbers = () => {
        dispatch({
            type: actionType.multiply,
            payload: {
                firstNumber: props.firstNumber,
                secondNumber: props.secondNumber
            }
        });
    };
    
    return (
        <button onClick={ multiplyNumbers }> * </button>
    );
};
