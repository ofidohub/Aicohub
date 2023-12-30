// Header.tsx
import React from 'react';
import './Header.css';
import Search from './Search';
const Header = () => {
    return (React.createElement("header", { className: "header" },
        React.createElement("div", { className: "logo-title" },
            React.createElement("img", { src: "/logo.png", alt: "Logo" }),
            " "),
        React.createElement("div", { className: "spacer" }),
        React.createElement("nav", null,
            React.createElement(Search, null))));
};
export default Header;
