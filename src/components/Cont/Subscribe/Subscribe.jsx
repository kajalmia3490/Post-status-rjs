import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const [subscribe, setSubscribe] = useState('Subscribe Now');

    const subscribeBtn = () => {
        if(formData) {
            setSubscribe('Subscribed');
        }
    }

    return (
        <div className='subscribe-section'>
            <h2 className='sub-title'>
                Subscribe To The Latest WordPress <span>Business News</span>
            </h2>
            <div className='subscribe'>
                <p className='subscribe-text'>
                    Don’t forget to subscribe to the industry leading Post Status Newsletter to stay in the know on all things going on in the broader WordPress Community.
                </p>

                <form action='#' onSubmit={submitHandler}>
                    <div className='form-info'>
                        <p>
                            <label>First Name *</label>
                            <input
                                type='text'
                                name='fname'
                                placeholder='first name'
                                value={formData.fname}
                                required
                                onChange={handleInputChange} />
                        </p>

                        <p>
                            <label>Last Name *</label>
                            <input
                                type='text'
                                name='lname'
                                placeholder='last name'
                                value={formData.lname}
                                required
                                onChange={handleInputChange} />
                        </p>
                    </div>

                    <p className='form-email'>
                        <label>Email *</label>
                        <input
                            type='email'
                            name='email'
                            placeholder='enter your email'
                            value={formData.email}
                            onChange={handleInputChange} />
                    </p>

                    <button
                        className='subscribe-btn'
                        type='submit'
                        onClick={subscribeBtn} >
                        {subscribe} →
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Subscribe;