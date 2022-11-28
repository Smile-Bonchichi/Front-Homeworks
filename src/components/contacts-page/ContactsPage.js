import { useState } from 'react';

const ContactsPage = () => {
    const [inputValue, setInputValue] = useState('');
    
    const changeInput = (e) => {
        setInputValue(e.target.value);
    };
    
    const stateInfo = () => {
        alert(inputValue);
        
        clearState();
    };
    
    const clearState = () => {
        setInputValue('');
    };
    
    return (
        <>
            <input type='text' value={ inputValue }
                   onChange={ changeInput }/>
            <button onClick={ stateInfo }>add</button>
            <button onClick={ clearState }>clear</button>
        </>
    );
};

export default ContactsPage;