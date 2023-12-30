// Footer.tsx
import React from 'react';
import './Footer.css';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="newsletter">
        <Newsletter />
      </div>
      <div className="copy-right">
        <p>&copyright; 2024 AicoHub right reserve</p>

      </div>
      </div>
    </footer>
  );
};

export default Footer;