// DropdownMenu.tsx
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

const DropdownMenu: React.FC = () => {
  return (
    <div className="dropdown">
      <a href="#">AICOHUB <FontAwesomeIcon icon={faChevronDown} /></a>
      <div className="dropdown-content">
        <a href="#">AICO TECHNOLOGY</a>
        <a href="#">AICO SCIENCE</a>
        <a href="#">CYBER-SECURITY</a>
        <a href="#">STARTUPS</a>
        <a href="#">CRYPTOTECH</a>
        <a href="#">RESEARCH</a>
      </div>
    </div>
  );
};

export default DropdownMenu;