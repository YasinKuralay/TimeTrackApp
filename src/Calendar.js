import axios from 'axios';
import React, { Component } from 'react';
import './Calendar.css';

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

    getAllBookings() {
        axios
            .get('/getAllBookings')
            .then(({ data }) => {
                console.log('data in get all bookings is: ', data);
                this.setState({ ['results']: data });
                console.log('this.state.results is: ', this.state.results);
            })
            .catch((err) => {
                console.log('error in get all bookings:', err);
            });
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
                <div
                    className='get-all-bookings'
                    onClick={() => this.getAllBookings()}
                >
                    Get All Bookings
                </div>
                {this.state.results && (
                    <div className='results-here'>
                        {this.state.results.map((elem, idx) => {
                            return (
                                <div key={idx + 'result'}>
                                    {elem.id} {elem.description} {elem.start_at}{' '}
                                    {elem.end_at}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default Calendar;
