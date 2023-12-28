// Header.tsx
import React from 'react';
import './Header.css';
import DropdownMenu from './DropdownMenu';
import Search from './Search';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/logo.png" alt="Logo"  /> {/* Add this line */}
      </div>
     
      <div className="spacer" />
      <nav>
      <li>
      <Search />
        <DropdownMenu />
      </li>
      </nav>
   
    </header>
  );
};

export default Header;