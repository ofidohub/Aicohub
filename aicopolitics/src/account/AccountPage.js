// AccountPage.js
import React, { useState } from 'react';
import LoginPage from './UserLogin';
import CreateAccountPage from './CreateAccountPage';
import './AccountPage.css'; // Import the CSS file

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="accountPage">
        <h1>Account/Login</h1>
        <LoginPage />
        <CreateAccountPage />
      </div>
    );
  } else {
    return (
      <div className="accountPage">
        <h1>Account Details</h1>
        <div className="account-details">
          <p>Username: </p>
          <p>Password: </p>
        </div>
      </div>
    );
  }
};

export default AccountPage;