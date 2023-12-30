// HomePage.tsx
import React from 'react';
import { NavList } from '../components/NavList';
import Footer from '../components/Footer';
import Header from '../components/Header';
const HomePage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(NavList, null),
        React.createElement("div", { className: "footer" },
            React.createElement(Footer, null))));
};
export default HomePage;
