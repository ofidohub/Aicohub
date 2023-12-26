// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">Politics</li>
                    <li className="nav-item">Technology</li>
                    <li className="nav-item">Business</li>
                    <li className="nav-item">Sport</li>
                    <li className="nav-item">Spacetech</li>
                    <li className="nav-item">Cryptotech</li>
                    <li className="nav-item">EV</li>
                    <li className="nav-item">AI</li>
                    <li className="nav-item">Finance</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;