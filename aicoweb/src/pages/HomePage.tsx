// HomePage.tsx
import React from 'react';
import { NavList } from '../components/NavList';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <NavList />
      <div className="footer">
        <Footer />
      </div>
   
    </>
  );
};

export default HomePage;