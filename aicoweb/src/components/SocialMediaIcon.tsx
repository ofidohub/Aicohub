// SocialMediaIcon.tsx
import React from 'react';
import './SocialMediaIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialMediaIconProps {
  icon: IconDefinition;
  url: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ icon, url }) => {
  return (
    <a href={url} className="social-media-icon">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
};

export default SocialMediaIcon;