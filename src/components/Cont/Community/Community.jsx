import React from 'react';
import './Community.css';

const Community = () => {
    return (
        <div>
            <div className='top'>
                <h1 className='community-header'>
                    Testimonials From The <span>Community</span>
                </h1>

                <p className='community-para'>
                    At the end of the day it’s about people, real humans, building their connections, growing their knowledge, and in the process, making WordPress better for everyone.
                </p>

                <img src='https://poststatus.com/wp-content/uploads/2023/07/ps-underline.svg' alt='...' />
            </div>

            <div className='community-people'>
                <div className='people1'>
                    <img src='https://poststatus.com/wp-content/uploads/2023/07/Greg-Rickaby.jpeg' alt='...' />
                    <p className='com-para'>
                        I just hired six engineers at Web Dev Studios, and almost all of them came from a single (paid) listing on Post Status.
                        <label>– Greg Rickaby, Web Dev Studios</label>
                    </p>
                </div>

                <div className='people2'>
                    <img src='https://poststatus.com/wp-content/uploads/2023/07/Francesca-Marano.jpeg' alt='...' />
                    <p className='com-para'>
                        I’ve found my (dream) job at SiteGround through the Post Status job board.
                        <label>– Francesca Marano, SiteGround</label>
                    </p>
                </div>

                <div className='people3'>
                    <img src='https://poststatus.com/wp-content/uploads/2023/07/Igor-Benic.jpeg' alt='...' />
                    <p className='com-para'>
                        My career and life have changed for good after applying for a job from the Post Status platform.
                        <label>– Igor Benic, Grow Development</label>
                    </p>
                </div>

                <div className='people4'>
                    <img src='https://poststatus.com/wp-content/uploads/2023/07/Syed-Balkhi.jpeg' alt='...' />
                    <p className='com-para'>
                        I know Post Status is a community for serious WordPress professionals, and when I got a lead for a potential developer from there, I took it seriously and ended up hiring them full-time.
                        <label>– Syed Balkhi, OptinMonster</label>
                    </p>
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

export default Community;