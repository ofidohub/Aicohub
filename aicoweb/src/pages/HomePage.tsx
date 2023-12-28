// Home.tsx
import React from 'react';
import './HomePage.css';
import NavList from '../components/NavList'; // Adjust the path according to your project structure
import Header from '../components/Header'; // Adjust the path according to your project structure
import Footer from '../components/Footer'; // Adjust the path according to your project structure

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header>
        <NavList />
        <Header /> {/* Removed className="" */}
      </header>
      <div className="horizontal-line"></div> {/* This is the horizontal line */}
      
      <div className="body-container">
        <section className="body-section">
          {/* Content for the first section */}
        </section>
        <section className="body-section">
          {/* Content for the second section */}
        </section>
        <section className="body-section">
          {/* Content for the third section */}
        </section>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;