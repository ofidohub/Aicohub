// DropdownMenu.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './DropdownMenu.css';
const DropdownMenu = () => {
    return (React.createElement("div", { className: "dropdown" },
        React.createElement("a", { href: "#" },
            "AICOHUB ",
            React.createElement(FontAwesomeIcon, { icon: faChevronDown })),
        React.createElement("div", { className: "dropdown-content" },
            React.createElement("a", { href: "#" }, "AICO TECHNOLOGY"),
            React.createElement("a", { href: "#" }, "AICO SCIENCE"),
            React.createElement("a", { href: "#" }, "CYBER-SECURITY"),
            React.createElement("a", { href: "#" }, "STARTUPS"),
            React.createElement("a", { href: "#" }, "CRYPTOTECH"),
            React.createElement("a", { href: "#" }, "RESEARCH"))));
};
export default DropdownMenu;
