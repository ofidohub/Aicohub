// MenuBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';


const MenuBar = ({ categories }) => {
  return (
    <div className="menu-bar">
      {categories.map((category, index) => (
        <a key={index} href={`/${category.toLowerCase()}`}>{category}</a>
      ))}
    </div>
  );
};

export default MenuBar;