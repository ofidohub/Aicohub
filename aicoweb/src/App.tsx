// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

type IconName = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'mastodon' | 'medium' | 'tiktok';

const socialMediaData: { icon: IconName; url: string; }[] = [
  { icon: 'facebook', url: 'https://www.facebook.com' },
  { icon: 'instagram', url: 'https://www.instagram.com' },
  { icon: 'twitter', url: 'https://www.twitter.com' },
  { icon: 'linkedin', url: 'https://www.linkedin.com' },
  { icon: 'mastodon', url: 'https://mastodon.social' },
  { icon: 'medium', url: 'https://medium.com' },
  { icon: 'tiktok', url: 'https://www.tiktok.com' },
];

function App() {
  return (
    <Router>
      <HomePage socialMediaData={socialMediaData} />
    </Router>
  );
}

export default App;