// NavList.tsx
import React from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import './NavList.css';
// Import pages
import PoliticsPage from '../pages/PoliticsPage';
import TechnologyPage from '../pages/Technology';
import SpaceTechPage from '../pages/SpaceTech';
import BusinessPage from './BusinessPage';
// Import components
import DropdownMenu from './DropdownMenu';
const NavList = () => {
    const location = useLocation();
    // Define routes
    const routes = (React.createElement(Routes, null,
        React.createElement(Route, { path: "/politics", element: React.createElement(PoliticsPage, null) }),
        React.createElement(Route, { path: "/technology", element: React.createElement(TechnologyPage, null) }),
        React.createElement(Route, { path: "/space-tech", element: React.createElement(SpaceTechPage, null) }),
        React.createElement(Route, { path: "/business", element: React.createElement(BusinessPage, null) })));
    // Define nav links
    const navLinks = (React.createElement("ul", null,
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/politics", className: location.pathname === "/politics" ? "active" : "" }, "Politics")),
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/technology", className: location.pathname === "/technology" ? "active" : "" }, "Technology")),
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/space-tech", className: location.pathname === "/space-tech" ? "active" : "" }, "Space Tech")),
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/business", className: location.pathname === "/business" ? "active" : "" }, "Business")),
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/science", className: location.pathname === "/science" ? "active" : "" }, "Science")),
        React.createElement("li", { className: "nav-item" },
            React.createElement(NavLink, { to: "/crypto-tech", className: location.pathname === "/crypto-tech" ? "active" : "" }, "Crypto Tech"))));
    return (React.createElement("nav", null,
        navLinks,
        React.createElement("div", { className: "spacer" }),
        React.createElement(DropdownMenu, null)));
};
export { NavList };
