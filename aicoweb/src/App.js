// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'; // Make sure to import NotFoundPage
const App = () => {
    return (React.createElement(Router, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) }),
            " ")));
};
export default App;
