// Footer.tsx
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Newsletter from './Newsletter';
import './Footer.css'; // Import the CSS file
const Footer = () => {
    return (React.createElement("footer", { className: "footer" },
        " ",
        React.createElement("div", { className: "newsletter-signup" },
            React.createElement(Newsletter, null)),
        React.createElement("div", { className: "copyright" },
            React.createElement("p", null, " 2024 AicoHub right reserve")),
        React.createElement("div", { className: 'footer-links' },
            React.createElement(SocialMediaIcon, { icon: "facebook", url: "http://www.facebook.com" }),
            React.createElement(SocialMediaIcon, { icon: "twitter", url: "http://www.twitter.com" }),
            React.createElement(SocialMediaIcon, { icon: "linkedin", url: "http://www.linkedin.com" }),
            React.createElement(SocialMediaIcon, { icon: "instagram", url: "http://www.instagram.com" }),
            React.createElement(SocialMediaIcon, { icon: "tiktok", url: "http://www.tiktok.com" }),
            React.createElement(SocialMediaIcon, { icon: "medium", url: "http://www.medium.com" }))));
};
export default Footer;
