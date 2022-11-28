import { useState } from 'react';

const PortfolioPage = () => {
    const [works, setWorks] = useState([]);
    
    const getWork = () => {
        setWorks([...works, 'Work']);
    };
    
    return (
        <>
            <button onClick={ getWork }>get</button>
            <ul>
                {
                    works.length > 0
                        ?
                        works.map(
                            (value, index) =>
                                <li key={ index }>{ value + (index + 1) }</li>)
                        : <li>Пусто</li>
                }
            </ul>
        </>
    );
};

export default PortfolioPage;