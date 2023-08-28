import React from 'react';
import './Membership.css';

const Membership = () => {

    const paidBtnClick = () => {
        alert('Contact our support mail: \nsupport@poststatus.com');
    }

    return (
        <div className='container'>
            <div className='membership-section'>
                <h1 className='topic'>
                    We offer <span>Memberships</span> for WordPress Businesses & Individuals
                </h1>

                <p className='heading-para'>
                    For over 15 years, Post Status is the essential location for WordPress News, Jobs, and Networking. With the addition of the “Partner Directory”, we’re bringing new value to WordPress Companies looking to generate new Business.
                </p>

                <img src='https://poststatus.com/wp-content/uploads/2023/07/ps-underline.svg' alt='...' />

            </div>

            <div className='describe-section'>
                <div className='left-side'>
                    <h1 className='h1'>
                        For WordPress Business
                    </h1>

                    <p className='subtitle'>
                        Are you a WordPress Agency, Plugin Company, or Hosting Provider? Together, we’re stewards of the open-source movement, and that can only work if we’re connecting into each other’s potential for new business and important information.
                    </p>

                    <ul>
                        <li>
                            Create your listing in “The Directory” Post Status’ proprietary network of notable WordPress Businesses to drive new prospects and build market awareness
                        </li>
                        <li>
                            Team / Company Slack Account in the private Slack Workspace
                        </li>
                        <li>
                            Team access to Weekly Member Huddles
                        </li>
                        <li>
                            Rolling Social Media & Content Features
                        </li>
                        <li>
                            Unlimited access to our “invite-only” private Slack Workspace
                        </li>
                        <li>
                            Get the TL;DR of important WordPress news and events in our Weekly Newsletter.
                        </li>
                        <li>
                            Access to Members-Only Content
                        </li>
                    </ul>

                    <p>
                        <button className='button1' onClick={paidBtnClick}>
                            Join Now From $1,000 / year
                        </button>
                    </p>

                </div>

                <div className='right-side'>
                    <h1 className='h1'>
                        For Individuals
                    </h1>

                    <p className='subtitle'>
                        Are you working with WordPress every day as a freelancer, professional, or hobby? Do you want to stay up-to-date with the WordPress ecosystem? Join Post Status today to access the #1 WordPress Community with many points of contact for exploring deeper participation in the WordPress open source movement.
                    </p>

                    <ul>
                        <li>
                            Unlimited access to our “invite-only” private Slack Workspace
                        </li>
                        <li>
                            Get the TL;DR of important WordPress news and events in our Weekly Newsletter.
                        </li>
                        <li>
                            Access to Members-Only Content
                        </li>
                        <li>
                            Access to Weekly Member Huddles
                        </li>
                    </ul>

                    <p>
                        <button className='button2' onClick={paidBtnClick}>
                            Join Now $100 / year
                        </button>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Membership;