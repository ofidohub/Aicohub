// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Sidebar
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Sidebar content goes here */}
      </div>
    </>
  );
}

export default Sidebar;