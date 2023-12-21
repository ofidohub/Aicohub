import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  const categories = ['Politics', 'Business', 'SpaceTech', 'Sports', 'Finance', 'Banking'];
  
  return (
    <div className="menu-bar">
      {categories.map((category, index) => (
        <div key={index} className="menu-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;