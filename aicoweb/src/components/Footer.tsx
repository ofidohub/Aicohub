
// Footer.tsx
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Newsletter from './Newsletter';
import './Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer"> {/* Apply the 'footer' class */}
      <div className="newsletter-signup">
        <Newsletter />
      </div>
      <div className="copyright">
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