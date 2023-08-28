import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [join, setJoin] = useState('Join Today');
    const [isActive, setIsActive] = useState(false);

    const clickJoinBtn = () => {
        setJoin('Joined')
        alert('You Joined!');
        setIsActive(curr => !curr)
    };

    return (
        <div className='container'>
            <div className='home-content'>

                <div className='heading'>
                    <h1 className='h1'>
                        The most established <span>Community</span> for the <span>Business</span> of WordPress
                    </h1>

                    <p className='para'>
                        Post Status is the membership community for people who grow and sustain the WordPress economy. Our goal is for all of us who make up the WordPress community to give and grow together.
                    </p>

                    <button className='join-btn' onClick={clickJoinBtn} style={{
                        backgroundColor: isActive ? 'gray' : 'blue',
                        color: 'gainsboro'
                    }}>
                        {join}
                    </button>

                    <img className='arrow-icon' src='https://poststatus.com/wp-content/uploads/2023/07/ps-arrow.svg' alt='...' />
                </div>

                <div className='image'>
                    <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTd_MKeXzjXlWgXkKMdGuznGZG9wHAhs9qsaFoKlHBkNWZanw4m' alt='...' />
                </div>

            </div>

            <div className='logo-section'>
                <img src='https://poststatus.com/wp-content/uploads/2023/06/A2-Hosting.svg' alt='...' />
                <img src='https://poststatus.com/wp-content/uploads/2023/06/Elementor.svg' alt='...' />
                <img src='https://poststatus.com/wp-content/uploads/2023/06/GoDaddy.svg' alt='...' />
                <img src='https://poststatus.com/wp-content/uploads/2023/06/Gravity-Forms.svg' alt='...' />
                <img src='https://poststatus.com/wp-content/uploads/2023/06/Pagely.svg' alt='...' />
                <img src='https://poststatus.com/wp-content/uploads/2023/06/WordPress-dot-com.svg' alt='...' />
            </div>
        </div>
    );
};

export default Home;