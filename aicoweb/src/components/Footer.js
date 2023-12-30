// Footer.tsx
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Newsletter from './Newsletter';
const Footer = () => {
    return (React.createElement("footer", null,
        React.createElement("div", { className: "footer-links" },
            React.createElement("a", { href: "/about" }, "About"),
            React.createElement("a", { href: "/contact" }, "Contact"),
            React.createElement("a", { href: "/terms" }, "Terms of Use"),
            React.createElement("a", { href: "/privacy" }, "Privacy Policy"),
            React.createElement("a", { href: "/faq" }, "FAQ")),
        React.createElement("div", { className: "newsletter" },
            React.createElement(Newsletter, null)),
        React.createElement("div", { className: "copy-right" },
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
