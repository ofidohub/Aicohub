// NavList.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Change this line
import './NavList.css';
import UserAccountButton from './UserAccountButton';

const NavList: React.FC = () => {
  return (
    <ul>
      <li className="nav-item">
        <NavLink to="/politics" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Politics</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/technology" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Technology</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/sports" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Sports</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/entertainment" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Entertainment</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/science" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Science</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/health" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>CryptoTech</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/business" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Business</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/world" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>SpaceTech</NavLink>
      </li>
    
      <li className="nav-item right"><UserAccountButton /></li>
    </ul>
  );
};

export default NavList;