// SocialMediaIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css';

function SocialMediaIcons() {
  return (
    <div className="social-icons">
        <a href="https://www.facebook.com/aicopolitics" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/aicopolitics" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/aicopolitics" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
}

export default SocialMediaIcons;