import React from 'react';
import './Partner.css';

const Partner = () => {
    return (
        <div className='container1'>
            <div className='partner'>
                <div className='left-partner'>
                    <h1 className='h2'>
                        Companies that we <span>partner</span> with
                    </h1>

                    <p className='para'>
                        Post Status partners with WordPress Industry Leaders to increase their connection with the broader WordPress Community. Whether it be through brand recognition, featured listings, job listings, content features, or newsletter call-outs, Post Status is the location where your logo is guaranteed to be seen and reinforced by the community that pushes WordPress forward.
                    </p>

                    <img src='https://poststatus.com/wp-content/uploads/2023/07/ps-simple-arrow.svg' alt='...' />
                </div>

                <div className='text-logo right-partner'>
                    <div>
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/A2-Hosting.svg' alt='...' />
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/Elementor.svg' alt='...' />
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/GoDaddy.svg' alt='...' />
                    </div>

                    <div>
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/Gravity-Forms.svg' alt='...' />
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/Pagely.svg' alt='...' />
                        <img src='https://poststatus.com/wp-content/uploads/2023/06/WordPress-dot-com.svg' alt='...' />
                    </div>
                </div>
            </div>

            <div className='sub-partner'>
                <h1 className='heading3'>
                    Latest WordPress <span>News</span> and <span>Podcasts</span>
                </h1>

                <p className='para'>
                    Get the inside scoop on all things WordPress by tracking headlines and trends in our News and Podcasts area. Hear it first from the actual people making it happen!
                </p>

                <img src='https://poststatus.com/wp-content/uploads/2023/07/ps-asymmetric-lines.svg' alt='...' />
            </div>
        </div>
    );
};

export default Partner;