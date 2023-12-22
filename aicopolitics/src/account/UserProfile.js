// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// Import other components...

const Header = () => {
  return (
    <header>
      {/* Other links... */}
      <Link to="/user-profile">User Profile</Link>
    </header>
  );
};

export default Header;