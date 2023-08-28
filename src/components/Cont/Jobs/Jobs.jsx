import React from 'react';
import './Jobs.css';

const Jobs = () => {
    return (
        <div className='job-section'>
            <div className='jobs'>
                <div className='jobs-left'>
                    <h2 className='job-heading'>
                        Latest WordPress <span>Jobs</span>
                    </h2>

                    <p className='para'>
                        The Post Status job board is the best place to advertise and find work in the WordPress marketplace. We bring together serious WordPress professionals and great employers with well-compensated, typically full-time and remote positions.
                    </p>

                    <button className='jobs-btn'>
                        View All Jobs
                    </button>

                    <img className='symbol-img' src='https://poststatus.com/wp-content/uploads/2023/07/ps-two-lines.svg' alt='...' />
                </div>

                <div className='jobs-right'>
                    <table>
                        <tr>
                            <td>
                                <img src='https://poststatus.com/wp-content/uploads/2023/07/rtcamp-logo-circle-black-transparent-256x256-7-150x150.png' alt='...' />
                            </td>
                            <td>Wordpress Trainer</td>
                            <td>Remote</td>
                            <td>Full Time</td>
                        </tr>

                        <tr>
                            <td>
                            <img src='https://poststatus.com/wp-content/uploads/2023/07/a2_hosting_logo_squaretagline_400x400-150x150.png' alt='...' />
                            </td>
                            <td>Product Owner</td>
                            <td>Remote</td>
                            <td>Full Time</td>
                        </tr>

                        <tr>
                            <td>
                            <img src='https://poststatus.com/wp-content/uploads/2023/07/Yoast_Icon_Large_RGB-150x150.png' alt='...' />
                            </td>
                            <td>Socail/Paid Media Strategist</td>
                            <td>Remote</td>
                            <td>Full Time</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Jobs;