import React from 'react';
import './Header.css'; // Importing the CSS file
import SocialMediaIcons from './SocialMediaIcons'; // Importing the SocialMediaIcons component
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">AicoPolitics</h1> {/* Replace this with your actual title */}
      
      <div className="account">
        <NavLink to="/account" activeClassName="active">SignUp/Login</NavLink>
      </div>
      
      <div className="social-media-links">
        <SocialMediaIcons /> {/* Use the SocialMediaIcons component */}
      </div>
    </div>
  );
};

export default Header;