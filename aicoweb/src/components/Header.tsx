// Header.tsx
import React from 'react';
import './Header.css';


import DropdownMenu from './DropdownMenu';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/logo.png" alt="Logo"  /> {/* Add this line */}
      </div>
      <nav className="nav-list">
        <ul>
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
      <nav className="nav">
        <DropdownMenu />
     
       
      </nav>
    </header>
  );
};

export default Header;