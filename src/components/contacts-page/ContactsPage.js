import React, { Component } from 'react';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { inputValue: '' };
    }
    
    changeInput = (e) => {
        this.setState({ inputValue: e.target.value });
    };
    
    stateInfo = () => {
        alert(this.state.inputValue);
        
        this.clearState();
    };
    
    clearState = () => {
        this.setState({ inputValue: '' });
    };
    
    render() {
        return (
            <>
                <input type='text' value={ this.state.inputValue }
                       onChange={ this.changeInput }/>
                <button onClick={ this.stateInfo }>add</button>
                <button onClick={ this.clearState }>clear</button>
            </>
        );
    }
}

export default ContactsPage;