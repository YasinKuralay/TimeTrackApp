import axios from 'axios';
import React, { Component } from 'react';
import './Calendar.css';

// export default function Calendar() {
//     useEffect(() => {
//         axios
//             .get('/stopwatch/calendar')
//             .then((data) => {
//                 console.log('data in the front end is: ', data);
//                 // location.replace
//             })
//             .catch((err) => {
//                 console.log('error in /stopwatch/calendar');
//             });
//     }, []);
//     return (
// <div>
//     <div className='stopwatch-hider'></div>
//     <div className='inputCard'>

//     </div>
// </div>
//     );
// }

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submit() {
        console.log('this.state is: ', this.state);
        axios
            .post('/customBooking', this.state)
            .then(({ data }) => {
                console.log('data from server: ', data);
                if (data.success) {
                    //log the user into our app
                    window.location.replace('/stopwatch');
                } else {
                    this.setState({
                        error: true,
                    });
                }
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <div className='stopwatch-hider'></div>
                <div className='inputCard'>
                    <input
                        name='title'
                        placeholder='title'
                        type='title'
                        onChange={(e) => this.handleChange(e)}
                        autoComplete='off'
                    />
                    <input
                        name='time'
                        placeholder='how long? (00:00:00 format)'
                        type='text'
                        onChange={(e) => this.handleChange(e)}
                        autoComplete='off'
                    />
                    <input
                        name='started_at'
                        placeholder='Started at? (2016-06-22 19:10:25 format)'
                        type='text'
                        onChange={(e) => this.handleChange(e)}
                        autoComplete='off'
                    />
                    <input
                        name='finished_at'
                        placeholder='Endet at? (2016-06-22 19:10:25 format)'
                        type='text'
                        onChange={(e) => this.handleChange(e)}
                        autoComplete='off'
                    />

                    <div className='submit' onClick={() => this.submit()}>
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;
