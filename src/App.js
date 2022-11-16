import './App.css';
import AboutUs from './components/about-us/AboutUs.js';
import Portfolio from './components/portfolio/Portfolio.js';

function App() {
    const text = { title: 'hello', subtitle: 'lorem lorem lorem' };
    
    return (
        <div>
            <AboutUs text={ text }/>
            <Portfolio/>
        </div>
    );
}

export default App;
