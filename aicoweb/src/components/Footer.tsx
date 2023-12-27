// Footer.tsx
import React from 'react';
import './Footer.css';
import SocialMediaIcon from './SocialMediaIcon';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2022 Aicohub all right reserve </p>
      <div>
        <SocialMediaIcon icon={faFacebook} url="https://www.facebook.com/aicopolitics" />
        <SocialMediaIcon icon={faTwitter} url="https://www.twitter.com/aicopolitics" />
        <SocialMediaIcon icon={faInstagram} url="https://www.instagram.com/aicopolitics" />
      </div>
    </footer>
  );
};

export default Footer;