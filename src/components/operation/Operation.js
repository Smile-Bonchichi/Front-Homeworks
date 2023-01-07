import React from 'react';
import { useDispatch } from 'react-redux';
import type { NumberProps } from '../../props/NumberProps.js';
import { operationViewFactory } from '../../factory/OperationViewFactory.js';

export const Operation = (props: NumberProps) => {
    const dispatch = useDispatch();
    
    const operationNumbers = () => {
        dispatch(
            props.method(
                {
                    firstNumber: props.firstNumber,
                    secondNumber: props.secondNumber
                }
            )
        );
    };
    
    return (
        <button onClick={ operationNumbers }>
            { operationViewFactory(props.method) }
        </button>
    );
};
