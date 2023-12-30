// HomePage.tsx
import React from 'react';
import SocialMediaIcon from '../components/SocialMediaIcon';
import { NavList } from '../components/NavList';
import Header from '../components/Header';
import Footer from '../components/Footer';
const HomePage = ({ socialMediaData }) => {
    return (React.createElement("div", null,
        React.createElement("nav", null,
            React.createElement(Header, null),
            socialMediaData.map((data, index) => (React.createElement(SocialMediaIcon, { key: index, icon: data.icon, url: data.url }))),
            React.createElement(NavList, null),
            React.createElement(Footer, null))));
};
export default HomePage;
