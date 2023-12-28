
// DropdownMenu.tsx
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>">
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