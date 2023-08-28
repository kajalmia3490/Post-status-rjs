import React from 'react';
import './Header.css';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='header'>

            <div className='logo'>
                <img src='https://poststatus.com/wp-content/uploads/2023/07/Post-Status.svg' />
            </div>

            <nav id='navbar'>
                <a href='#'>News</a>
                <a href='#'>Jobs</a>
                <a href='#'>Partner Directory</a>
                <a className='login' href='#'>Login</a>
                <a className='signup-btn' href='#'>Signup</a>
            </nav>

            <div className='icon' id='menu-icon'>
                <AiOutlineMenu />
            </div>

        </div>
    );
};

export default Header;