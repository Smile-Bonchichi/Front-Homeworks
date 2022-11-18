import React, { Component } from 'react';
import style from './secondInfo.module.css';

class SecondInfo extends Component {
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

export default SecondInfo;
