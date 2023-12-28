// UserPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserPage;