// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import User from './pages/UserPage';
import NotFound from './pages/NotFoundPage'; // Make sure to import NotFound

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/user/:id" component={User} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;