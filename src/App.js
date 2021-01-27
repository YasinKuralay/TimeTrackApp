import axios from 'axios';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Stopwatch from './Stopwatch';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Route path='*' component={Navbar} />
                <Route exact path='/' component={Stopwatch} />
                {/* <Link to='/testing'>Take me to testing</Link> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
