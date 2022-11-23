import React, { Component } from 'react';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { works: [] };
    }
    
    getWork = () => {
        const tempWorks = this.state.works;
        
        tempWorks.push('Work' + (tempWorks.length + 1));
        
        this.setState({ works: tempWorks });
    };
    
    render() {
        return (
            <>
                <button onClick={ this.getWork }>get</button>
                <ul>
                    {
                        this.state.works.length > 0 ?
                            this.state.works.map(
                                (value) => <li>{ value }</li>) :
                            <li>Пусто</li>
                    }
                </ul>
            </>
        );
    }
}

export default PortfolioPage;