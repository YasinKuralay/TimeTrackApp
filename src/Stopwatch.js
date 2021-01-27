import React, { useState } from 'react';
import './Stopwatch.css';

export default function Stopwatch() {
    const [secondValue, setSecondValue] = useState(0);
    const [timer, setTimer] = useState();
    const [isRunning, setIsRunning] = useState(false);

    // useEffect(() => {}, [secondValue]);

    function startTimer() {
        if (isRunning) {
            // Pause the timer if its already running
            console.log(secondValue);
            clearInterval(timer);
            setIsRunning(false);
        } else {
            // Create new timer if its not running
            const time = Date.now();
            setTimer(
                setInterval(() => {
                    setSecondValue(
                        secondValue + Math.floor((Date.now() - time) / 1000)
                    );
                }, 1000)
            );
            setIsRunning(true);
        }
    }

    function stopTimer() {
        // Use second value here
        console.log(secondValue);
        // Reset counter
        setSecondValue(0);
        clearInterval(timer);
        setIsRunning(false);
    }

    return (
        <div>
            <div className='stop-watch-card'>
                <input
                    type='text'
                    className='card-title'
                    defaultValue='New Time Tracker' // {Title || New Time Tracker}
                    // onKeyDown={titleFieldKeyDown}
                    // onBlur={restoreTitleOnBlur}
                ></input>
                <h1 className='tracker-time-value'>{secondValue}</h1>
                <div className='start-time' onClick={startTimer}>
                    {isRunning ? 'Pause' : 'Start'}
                </div>
                <div className='stop-time' onClick={stopTimer}>
                    Reset
                </div>
            </div>
        </div>
    );
}
