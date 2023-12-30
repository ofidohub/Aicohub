// UserPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
const UserPage = () => {
    const { id } = useParams();
    return (React.createElement("div", null,
        React.createElement("h1", null, "User Page"),
        React.createElement("p", null,
            "User ID: ",
            id)));
};
export default UserPage;
