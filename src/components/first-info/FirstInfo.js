import React, { Component } from 'react';
import style from './firstInfo.module.css';

class FirstInfo extends Component {
    render() {
        return (
            <div>
                <ul className={ style.color }>
                    <li>name: { this.props.user.name }</li>
                    <li>age: { this.props.user.age }</li>
                </ul>
            </div>
        );
    }
}

export default FirstInfo;
