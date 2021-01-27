import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

export default function Stopwatch() {
    const [secondValue, setSecondValue] = useState(0);

    // useEffect(() => {}, [secondValue]);

    function startTimer() {
        setInterval(() => {
            let newSecondValue = secondValue + 1;
            setSecondValue(newSecondValue);
            console.log('secondValue is: ', secondValue);
        }, 1000);
    }

    return (
        <div>
            <div className='stop-watch-card'>
                <input
                    type='text'
                    className='card-title'
                    // defaultValue={title}
                    // onKeyDown={titleFieldKeyDown}
                    // onBlur={restoreTitleOnBlur}
                ></input>
                <h1 className='tracker-time-value'>{secondValue}</h1>
                <div className='start-time' onClick={startTimer}>
                    Start
                </div>
                <div className='stop-time'>Stop</div>
            </div>
        </div>
    );
}
