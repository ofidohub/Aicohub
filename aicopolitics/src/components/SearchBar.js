import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;