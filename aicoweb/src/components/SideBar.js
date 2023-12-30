// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => setIsOpen(!isOpen) }, "Toggle Sidebar"),
        React.createElement("div", { className: `sidebar ${isOpen ? 'open' : ''}` })));
};
export default Sidebar;
