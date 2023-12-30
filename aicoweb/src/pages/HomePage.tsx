// HomePage.tsx
import React from 'react';
import SocialMediaIcon from '../components/SocialMediaIcon';
import { NavList } from '../components/NavList';
import Header from '../components/Header';
import Footer from '../components/Footer';

type IconName = 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'mastodon' | 'medium' | 'tiktok';

interface SocialMediaData {
  icon: IconName;
  url: string;
}

interface HomePageProps {
  socialMediaData: SocialMediaData[];
}

const HomePage: React.FC<HomePageProps> = ({ socialMediaData }) => {
  return (
    <div>
      <nav>
        <Header />
        {socialMediaData.map((data, index) => (
          <SocialMediaIcon key={index} icon={data.icon} url={data.url} />
        ))}
        <NavList />
        <Footer />
      </nav>
    </div>
  );
};

export default HomePage;