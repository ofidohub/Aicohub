// Footer.tsx
import React from 'react';
import './Footer.css';
import Newsletter from './Newsletter';
const Footer = () => {
    return (React.createElement("footer", null,
        React.createElement("div", { className: "footer-content" },
            React.createElement("div", { className: "newsletter" },
                React.createElement(Newsletter, null)),
            React.createElement("div", { className: "copy-right" },
                React.createElement("p", null, "&copyright; 2024 AicoHub right reserve")))));
};
export default Footer;
