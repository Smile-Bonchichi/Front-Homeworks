import React from 'react';
import { useDispatch } from 'react-redux';
import type { PropsNumber } from '../../props/PropsNumber.js';
import { actionType } from '../../redux/reducer.js';

export const Plus = (props: PropsNumber) => {
    const dispatch = useDispatch();
    
    const plusNumbers = () => {
        dispatch({
            type: actionType.plus,
            payload: {
                firstNumber: props.firstNumber,
                secondNumber: props.secondNumber
            }
        });
    };
    
    return (
        <button onClick={ plusNumbers }> + </button>
    );
};
