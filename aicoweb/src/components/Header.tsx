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
      <nav>
        <DropdownMenu />
      </nav>
    </header>
  );
};

export default Header;