// SocialMediaIcon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faMastodon, faMedium, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcon.css';
const icons = {
    facebook: faFacebook, instagram: faInstagram, twitter: faTwitter, linkedin: faLinkedin, mastodon: faMastodon, medium: faMedium, tiktok: faTiktok,
};
const SocialMediaIcon = ({ icon, url }) => {
    return (React.createElement("div", { className: "social-media-icon" },
        React.createElement("a", { href: url, target: "_blank", rel: "noopener noreferrer" },
            React.createElement(FontAwesomeIcon, { icon: icons[icon] }))));
};
export default SocialMediaIcon;
