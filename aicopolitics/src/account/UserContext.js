import React, { useContext } from 'react';

// Define UserContext
export const UserContext = React.createContext(null);

// Define YourComponent
function YourComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? `Hello, ${user.name}!` : 'You are not logged in.'}
    </div>
  );
}

// Export YourComponent
export default YourComponent;