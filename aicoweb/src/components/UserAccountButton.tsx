// UserAccountButton.tsx
import React from 'react';
import './UserAccountButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserAccountButton: React.FC = () => {
  return (
    <button>
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};

export default UserAccountButton;