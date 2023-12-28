// DropdownMenu.tsx
import React from 'react';
import './DropdownMenu.css';


const DropdownMenu: React.FC = () => {
  return (
    <div className="dropdown">
      <a href="#">AICOHUB</a>
      <div className="dropdown-content">
        <a href="#">Aico Technology</a>
        <a href="#">Aico Science</a>
        <a href="#">Cybersecurity</a>
        <a href="#">Aico Start up</a>
        <a href="#">CryptoTech</a>
      </div>
    </div>
  );
};

export default DropdownMenu;