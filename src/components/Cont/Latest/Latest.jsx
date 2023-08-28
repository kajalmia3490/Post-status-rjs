import React from 'react';
import './Latest.css';

const Latest = () => {
    return (
        <div className='latest-section'>
            <div className='latest-left'>
                <a href='#'>
                    Business Roundup Week Ending August 25
                </a>
                <a href='#'>
                    Joost and Marieke Join Post Status as Equity Partners
                </a>
                <a href='#'>
                    Member Spotlight: Rachel Winchester
                </a>
            </div>

            <div className='latest-right'>
                <a href='#'>
                    Launching a WordPress Product in Public: Session 19
                </a>
                <a href='#'>
                    What is Coaching & What Are Key Times to Have a Coach with Kelly Gallagher
                </a>
                <a href='#'>
                    The WP Agency Journey with J.J. Toothman of Lone Rock Point
                </a>
            </div>
        </div>
    );
};

export default Latest;