import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    actionNumberType
} from '../../redux/reducers/number-list-reducer/NumberListReducer.js';

export const NumberListComponent = () => {
    const { sum } = useSelector(state => state.numberListReducer);
    const dispatch = useDispatch();
    
    const [value, setValue] = useState(0);
    const [valueList, setValueList] = useState([]);
    
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };
    
    const changeValue = (e) => {
        setValue(e.target.value);
    };
    
    const add = () => {
        setValueList([...valueList, value]);
        
        dispatch({
            type: actionNumberType.add,
            payload: +value + +sum
        });
    };
    
    const clear = () => {
        setValueList([]);
        setValue(0);
        
        dispatch({
            type: actionNumberType.clear
        });
    };
    
    return (
        <div style={ styles }>
            <input onChange={ changeValue }
                   value={ value }
                   type='number'
                   id='value'/>
            <label htmlFor='value'>Вводи</label>
            
            <div>
                <button onClick={ add }>add</button>
                <button onClick={ clear }>clear</button>
            </div>
            
            <h1>{ sum }</h1>
            
            {
                valueList.map((value, index) =>
                    <p key={ index }> { value } </p>
                )
            }
        </div>
    );
};
