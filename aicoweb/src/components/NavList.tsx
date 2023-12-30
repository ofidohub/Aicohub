// NavList.tsx
import React from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './NavList.css';
import { NavDropdown } from 'react-bootstrap';


import Footer from './Footer'; // Assuming you have a Footer component

// Import pages
import PoliticsPage from '../pages/PoliticsPage';
import TechnologyPage from '../pages/Technology';
import SpaceTechPage from '../pages/SpaceTech';
import BusinessPage from './BusinessPage';

// Import components
import DropdownMenu from './DropdownMenu';

const NavList: React.FC = () => {
  const location = useLocation();

  // Define routes
  const routes = (
    <Routes>
      <Route path="/politics" element={<PoliticsPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/space-tech" element={<SpaceTechPage />} />
      <Route path="/business" element={<BusinessPage />} />
    </Routes>
  );

  // Define nav links
  const navLinks = (
    <ul>
      <li className="nav-item">
        <NavLink to="/politics" className={location.pathname === "/politics" ? "active" : ""}>Politics</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/technology" className={location.pathname === "/technology" ? "active" : ""}>Technology</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/space-tech" className={location.pathname === "/space-tech" ? "active" : ""}>Space Tech</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/business" className={location.pathname === "/business" ? "active" : ""}>Business</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/science" className={location.pathname === "/science" ? "active" : ""}>Science</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/crypto-tech" className={location.pathname === "/crypto-tech" ? "active" : ""}>Crypto Tech</NavLink>
      </li>
    </ul>
  );

  return (
 <nav>
  {navLinks}
  <div className="spacer" />
  <DropdownMenu />
 </nav>

  );
};

export { NavList };