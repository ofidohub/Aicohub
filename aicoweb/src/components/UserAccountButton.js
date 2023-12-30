// UserAccountButton.tsx
import React from 'react';
import './UserAccountButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const UserAccountButton = () => {
    return (React.createElement("button", null,
        React.createElement(FontAwesomeIcon, { icon: faUser })));
};
export default UserAccountButton;
