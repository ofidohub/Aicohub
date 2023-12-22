// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const countries = ['United States', 'United Kingdom', 'Australia', 'Canada', 'India', 'Ireland', 'New Zealand', 'South Africa'];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
        <NavLink to="/politics" activeClassName="active">POLITICS</NavLink>
          <NavLink to="/business" activeClassName="active">BUSINESS</NavLink>
          <NavLink to="/technology" activeClassName="active">TECHNOLOGY</NavLink>
          <NavLink to="/travel" activeClassName="active">TRAVEL</NavLink>
          <NavLink to="/science" activeClassName="active">SCIENCE</NavLink>
          <NavLink to="/ai" activeClassName="active">AI</NavLink>
          <NavLink to="/sports" activeClassName="active">SPORTS</NavLink>
          <NavLink to="/entertainment" activeClassName="active">ENTERTAINMENT</NavLink>
          <NavLink to="/health" activeClassName="active">HEALTH</NavLink>
          <NavLink to="/style" activeClassName="active">STYLE</NavLink>
        </ul>
        
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Countries 
            <i className="fa fa-caret-down"></i>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              {countries.map((country, index) => (
                <NavLink key={index} to={`/countries/${country}`}>{country}</NavLink>
              ))}
            </div>
          )}
          <div className="search-container">
            <input type="text" placeholder="Search..." />
          </div>
        </div> 
      </nav>
    </div>
  );
};

export default Navbar;