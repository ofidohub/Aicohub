// UserDashboard.js
import React from 'react';

const UserDashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* Display user dashboard... */}
    </div>
  );
};

export default UserDashboard;