import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Stopwatch from './Stopwatch';
import Calendar from './Calendar';
import Registration from './Registration';
import Login from './Login';
import './App.css';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Route path='*' component={Navbar} />
                <Route exact path='/' component={Registration} />
                <Route exact path='/login' component={Login} />
                <Route path='/stopwatch' component={Stopwatch} />
                <Route path='/stopwatch/calendar' component={Calendar} />
                {/* <Link to='/testing'>Take me to testing</Link> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
