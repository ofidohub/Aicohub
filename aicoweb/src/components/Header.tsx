// Header.tsx
import React from 'react';
import './Header.css';
import UserAccountButton from './account/UserAccountButton';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/logo.png" alt="Logo" className="logo" /> {/* Add this line */}
        <h1 className="header-title">Aico Hub</h1>
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
      <UserAccountButton />
    </header>
  );
};

export default Header;


