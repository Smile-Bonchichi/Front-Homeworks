import React from 'react';
import { useDispatch } from 'react-redux';
import type { PropsNumber } from '../../props/PropsNumber.js';
import { operationViewFactory } from '../../factory/OperationViewFactory.js';

export const Operation = (props: PropsNumber) => {
    const dispatch = useDispatch();
    
    const operationNumbers = () => {
        dispatch({
            type: props.action,
            payload: {
                firstNumber: props.firstNumber,
                secondNumber: props.secondNumber
            }
        });
    };
    
    return (
        <button onClick={ operationNumbers }>
            { operationViewFactory(props.action) }
        </button>
    );
};
