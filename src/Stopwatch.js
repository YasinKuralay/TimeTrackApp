import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

export default function Stopwatch() {
    const [secondValue, setSecondValue] = useState(0);
    const [timer, setTimer] = useState();
    const [isRunning, setIsRunning] = useState(false);
    const [calculatedTimeString, setCalculatedTimeString] = useState(
        '00:00:00'
    );

    useEffect(() => {
        // used for transforming the seconds value into 00:00:00 format
        let hours = 0;
        let minutes = Math.floor(secondValue / 60);
        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
        }
        let seconds = secondValue % 60;

        hours = hours.toString();
        minutes = minutes.toString();
        seconds = seconds.toString();

        if (hours.length === 1) {
            //these set the 00:00:00 format correctly, even if the number is only one digit (ex: 0:0:13)
            hours = '0' + hours;
        }

        if (minutes.length === 1) {
            minutes = '0' + minutes;
        }

        if (seconds.length === 1) {
            seconds = '0' + seconds;
        }

        console.log(hours, minutes, seconds);

        setCalculatedTimeString(hours + ':' + minutes + ':' + seconds);
    }, [secondValue]);

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
                <h1 className='tracker-time-value'>{calculatedTimeString}</h1>
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
