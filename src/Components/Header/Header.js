import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
            <h4>Quiz buzz</h4>
        </div>
    );
};

export default Header;