import React, { Component } from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        
        this.state = { isShow: false };
    }
    
    showText = () => {
        this.setState({ isShow: !this.state.isShow });
    };
    
    render() {
        return (
            <>
                <p hidden={ this.state.isShow }>текст</p>
                <button onClick={ this.showText }>кнопку</button>
            </>
        );
    }
}

export default AboutUs;