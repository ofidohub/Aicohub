import React, { useContext } from 'react';
import { UserContext } from './account/UserContext'; // Import your UserContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AccountPage from './account/AccountPage';
import AboutUs from './components/AboutUs';
import NotFoundPage from './components/NotFoundPage';

import UserLogin from './account/UserLogin';
import UserRegister from './account/UserRegister';
import ForgotPassword from './account/ForgotPassword';
import ResetPassword from './account/ResetPassword';
import ChangePassword from './account/ChangePassword';
import UserProfile from './account/UserProfile';
import UserDashboard from './account/UserDashboard';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import News from './Media/News'; // Import News component

const App = () => {
  const user = useContext(UserContext); // Get user data from UserContext

  return (
    <Router>
      <Header />
      <Navbar />
      
      <FontAwesomeIcon icon={faFacebook} /> {/* Use FontAwesomeIcon */}
      <Routes>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/dashboard" element={<UserDashboard user={user} />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/news" element={<News />} /> {/* Add route for News */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;