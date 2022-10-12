import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav className='nav-style'>
                <div>
                    <h2>Quiz Buzz</h2>
                </div>
                <div className='nav-link'>
                    <Link to='/home'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </nav>
            <h2>Quiz buzz</h2>
        </div>
    );
};

export default Header;