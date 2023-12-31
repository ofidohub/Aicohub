// Header.tsx
import React from 'react';
import './Header.css';
import DropdownMenu from './DropdownMenu';
import Search from './Search';
import UserAccountButton from './UserAccountButton';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <img src="/logo.png" alt="Logo"  /> {/* Add this line */}
      </div>
      <div className="spacer" />
      <nav>
      <UserAccountButton />
      </nav>

     
      <div className="spacer" />
      <nav>
     
      <Search />
       
    
      </nav>
   
    </header>
  );
};

export default Header;