import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <Link to='/'>
                <div className='stopwatch'>
                    <i className='fas fa-stopwatch fa-2x stopwatch-icon'></i>{' '}
                </div>
            </Link>
            <Link to='/stopwatch'>
                <div className='calendar'>
                    <i className='fas fa-2x fa-calendar-alt calendar-icon'></i>
                </div>
            </Link>
        </nav>
    );
}
