// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import User from './pages/UserPage';
import NotFound from './pages/NotFoundPage';
import NavList from './components/NavList';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
    return (
        <div>
            <Router>
                <HomePage />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
              
            </Router>
        </div>
    );
};

export default App;