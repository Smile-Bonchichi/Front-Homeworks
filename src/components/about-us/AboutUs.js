import { useState } from 'react';

const AboutUs = () => {
    const [isShow, setIsShow] = useState(false);
    
    const showText = () => {
        setIsShow(!isShow);
    };
    
    return (
        <>
            <p hidden={ isShow }>текст</p>
            <button onClick={ showText }>кнопку</button>
        </>
    );
};

export default AboutUs;