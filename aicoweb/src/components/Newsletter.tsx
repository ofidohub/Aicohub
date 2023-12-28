// Newsletter.tsx
import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle the subscription logic (e.g., send the email to your server)
    console.log(`Email for subscription: ${email}`);
  };

  return (
    <div className="newsletter-container">
      <h2 className="newsletter-header"></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;