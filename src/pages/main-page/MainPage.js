import HelloWorld from '../../components/hello-world/HelloWorld.js';
import FirstInfo from '../../components/first-info/FirstInfo.js';
import SecondInfo from '../../components/second-info/SecondInfo.js';

function MainPage() {
    const user = { name: 'Anna', age: 19 };
    
    return (
        <>
            <FirstInfo user={ user }/>
            <SecondInfo user={ user }/>
            
            <HelloWorld/>
        </>
    );
}

export default MainPage;
