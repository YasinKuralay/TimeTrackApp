import axios from 'axios';
import React, { useEffect } from 'react';

export default function Calendar() {
    useEffect(() => {
        axios
            .get('/stopwatch/calendar')
            .then((data) => {
                console.log('data in the front end is: ', data);
                // location.replace
            })
            .catch((err) => {
                console.log('error in /stopwatch/calendar');
            });
    }, []);
    return <div></div>;
}
