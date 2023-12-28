// NavList.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Change this line
import './NavList.css';
import UserAccountButton from './UserAccountButton';

const NavList: React.FC = () => {
  const location = useLocation();

  return (
    <ul>
      <li className="nav-item">
        <NavLink to="/politics" className={location.pathname === "/politics" ? "active" : ""}>Politics</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/technology" className={location.pathname === "/technology" ? "active" : ""}>Technology</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/sports" className={location.pathname === "/sports" ? "active" : ""}>Sports</NavLink>
    </li>
      <li className="nav-item right"><UserAccountButton /></li>
    </ul>
  );
};

export default NavList;