import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Operation } from '../../components/operation/Operation.js';
import {
    divide, minus, multiply, plus
} from '../../store/slice/operationSlice.js';

export const OperationPage = () => {
    const { number } = useSelector(state => state.operationReducer);
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };
    
    const buttons = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        
        width: '10vw'
    };
    
    const changeFirstNumber = (e) => {
        setFirstNumber(e.target.value);
    };
    
    const changeSecondNumber = (e) => {
        setSecondNumber(e.target.value);
    };
    
    return (
        <div style={ styles }>
            <h1>
                { number }
            </h1>
            
            <input onChange={ changeFirstNumber } type="number"
                   id="firstNumber"/>
            <label htmlFor="firstNumber">Первая цифра</label>
            
            <input onChange={ changeSecondNumber } type="number"
                   id="secondNumber"/>
            <label htmlFor="secondNumber">Вторая цифра</label>
            
            <div style={ buttons }>
                <Operation firstNumber={ firstNumber }
                           secondNumber={ secondNumber }
                           method={ plus }
                />
                <Operation firstNumber={ firstNumber }
                           secondNumber={ secondNumber }
                           method={ minus }
                />
                <Operation firstNumber={ firstNumber }
                           secondNumber={ secondNumber }
                           method={ multiply }
                />
                <Operation firstNumber={ firstNumber }
                           secondNumber={ secondNumber }
                           method={ divide }
                />
            </div>
        </div>
    );
};
