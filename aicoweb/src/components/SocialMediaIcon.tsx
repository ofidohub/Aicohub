// SocialMediaIcon.tsx
import React from 'react';
import './SocialMediaIcon.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaIconProps {
  icon: IconDefinition;
  url: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, url }) => {
  return (
    <a href={url} className="social-media-icon">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialMediaIcon;