import React from 'react';
import { useDispatch } from 'react-redux';
import type { PropsNumber } from '../../props/PropsNumber.js';
import { actionType } from '../../redux/reducer.js';

export const Minus = (props: PropsNumber) => {
    const dispatch = useDispatch();
    
    const minusNumbers = () => {
        dispatch({
            type: actionType.minus,
            payload: {
                firstNumber: props.firstNumber,
                secondNumber: props.secondNumber
            }
        });
    };
    
    return (
        <button onClick={ minusNumbers }> - </button>
    );
};
