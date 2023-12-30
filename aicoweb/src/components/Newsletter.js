// Newsletter.tsx
import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the subscription logic (e.g., send the email to your server)
        console.log(`Email for subscription: ${email}`);
    };
    return (React.createElement("div", { className: "newsletter-container" },
        React.createElement("h2", { className: "newsletter-header" }),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("input", { type: "email", value: email, onChange: e => setEmail(e.target.value), placeholder: "Enter your email", required: true }),
            React.createElement("button", { type: "submit" }, "Subscribe"))));
};
export default Newsletter;
