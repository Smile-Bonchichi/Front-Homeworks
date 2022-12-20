import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Divide } from '../../components/divide/Divide.js';
import { Minus } from '../../components/minus/Minus.js';
import { Plus } from '../../components/plus/Plus.js';
import { Multiply } from '../../components/multiply/Multiply.js';

export const MainPage = () => {
    const number = useSelector(state => state.number);
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
            
            <input onChange={ changeFirstNumber } type='number'
                   id='firstNumber'/>
            <label htmlFor='firstNumber'>Первая цифра</label>
            
            <input onChange={ changeSecondNumber } type='number'
                   id='secondNumber'/>
            <label htmlFor='secondNumber'>Вторая цифра</label>
            
            <div style={ buttons }>
                <Plus firstNumber={ firstNumber }
                      secondNumber={ secondNumber }/>
                
                <Minus firstNumber={ firstNumber }
                       secondNumber={ secondNumber }/>
                
                <Multiply firstNumber={ firstNumber }
                          secondNumber={ secondNumber }/>
                
                <Divide firstNumber={ firstNumber }
                        secondNumber={ secondNumber }/>
            </div>
        </div>
    );
};
