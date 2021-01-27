import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    function logout() {
        axios.get('/logout').then(() => {
            window.location.replace('/');
        });
    }
    return (
        <nav>
            <Link to='/'>
                <div className='login-register'>LOGIN</div>
            </Link>
            <Link to='/stopwatch'>
                <div className='stopwatch'>
                    <i className='fas fa-stopwatch fa-2x stopwatch-icon'></i>{' '}
                </div>
            </Link>
            <Link to='/stopwatch/calendar'>
                <div className='calendar'>
                    <i className='fas fa-2x fa-calendar-alt calendar-icon'></i>
                </div>
            </Link>
            <a href='/logout'>
                <div onClick={logout} className='logout'>
                    LOGOUT
                </div>
            </a>
        </nav>
    );
}
