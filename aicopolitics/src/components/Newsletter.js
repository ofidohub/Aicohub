import React from 'react';

const Newsletter = () => {
  return (
    <form className="newsletter">
      <label htmlFor="newsletter-input">
        <input id="newsletter-input" type="email" placeholder="Enter your email" />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Newsletter;