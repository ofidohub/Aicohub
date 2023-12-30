// Footer.tsx
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Newsletter from './Newsletter';


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
        </div>
        {/* Add more links as needed */}
      <div className="newsletter">
        <Newsletter />
      </div>
      <div className="copy-right">
        <p> 2024 AicoHub right reserve</p>
      </div>
      <div className='footer-links'>
        <SocialMediaIcon icon="facebook" url="http://www.facebook.com" />
        <SocialMediaIcon icon="twitter" url="http://www.twitter.com" />
        <SocialMediaIcon icon="linkedin" url="http://www.linkedin.com" />
        <SocialMediaIcon icon="instagram" url="http://www.instagram.com" />
        <SocialMediaIcon icon="tiktok" url="http://www.tiktok.com" />
        <SocialMediaIcon icon="medium" url="http://www.medium.com" />
        {/* Add more SocialMediaIcon components as needed */}
      </div>
    </footer>
  );
};

export default Footer;