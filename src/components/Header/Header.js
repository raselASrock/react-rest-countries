import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is my React Header</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/Photo">Photo</a>
                <a href="/about">About US</a>
            </nav>
        </div>
    );
};

export default Header;