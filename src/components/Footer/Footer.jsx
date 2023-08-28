import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-logo'>
                <img src='https://poststatus.com/wp-content/uploads/2023/07/Post-Status.svg' alt='...' />
            </div>

            <div className='list-items'>
                <ul>
                    <h5>Post Status</h5>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Store</a></li>
                    <li><a href='#'>Contact us</a></li>
                </ul>
                <ul>
                    <h5>Oportunities</h5>
                    <li><a href='#'>Enterprise Sponsorships</a></li>
                </ul>
                <ul>
                    <h5>The Directory</h5>
                    <li><a href='#'>Digital Agencies</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Plugins</a></li>
                </ul>
                <ul>
                    <h5>Resources</h5>
                    <li><a href='#'>Podcasts</a></li>
                    <li><a href='#'>Higher Ed Agencies</a></li>
                    <li><a href='#'>Newsletter Archive</a></li>
                </ul>

                <div className='right-box'>
                    <div className='box'>
                        <h5>JOIN POST STATUS</h5>
                        <p className='support-mail'>support@poststatus.com</p>
                        <button className='join-btn'>Join Today</button>
                    </div>

                    <p className='social-icons'>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                        <a href='#'></a>
                    </p>
                </div>
            </div>
            <hr />

            <div className='last-footer'>
                <p>
                © 2023 Post Status. All rights reserved
                </p>
                <p className='a'>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Use</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;