import axios from 'axios';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Stopwatch from './Stopwatch';
import Entrypage from './Entrypage';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Route path='*' component={Navbar} />
                <Route exact path='/' component={Stopwatch} />
                {/* <Route exact path='/timer' component={Stopwatch} /> */}
                {/* <Link to='/testing'>Take me to testing</Link> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
