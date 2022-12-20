import React from 'react';
import { useDispatch } from 'react-redux';
import type { PropsNumber } from '../../props/PropsNumber.js';
import { actionType } from '../../redux/reducer.js';

export const Divide = (props: PropsNumber) => {
    const dispatch = useDispatch();
    
    const divideNumbers = () => {
        dispatch({
            type: actionType.divide,
            payload: {
                firstNumber: props.firstNumber,
                secondNumber: props.secondNumber
            }
        });
    };
    
    return (
        <button onClick={ divideNumbers }> / </button>
    );
};
