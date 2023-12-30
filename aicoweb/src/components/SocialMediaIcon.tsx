// SocialMediaIcon.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faMastodon,  faMedium, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcon.css';

const icons = {
  facebook: faFacebook, instagram: faInstagram,  twitter: faTwitter,  linkedin: faLinkedin,  mastodon: faMastodon, medium: faMedium, tiktok: faTiktok,};

type IconName = keyof typeof icons;

interface SocialMediaIconProps {
  icon: IconName;
  url: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, url }) => {
  return (
  <div className="social-media-icon">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icons[icon]} />
    </a>
  </div>


  );
};

export default SocialMediaIcon;