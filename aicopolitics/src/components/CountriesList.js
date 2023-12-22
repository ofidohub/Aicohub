

// Importing necessary modules
import React from 'react'; // React library for building user interfaces
import { Link } from 'react-router-dom'; // Link component from react-router-dom for navigation
import './CountriesList.css'; // Importing CSS for styling the component


// Defining the CountriesList component
const CountriesList = ({ countries }) => { // Receives countries as props
  // The component returns a list of countries. Each country is a link that navigates to a specific route.
  return (
    <div className="countries-list">
      <h2>World Politics</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const countries = ['Unites States', 'China', 'Russia', 'Europeans', 'United Kingdom', 'Africa', 'Middle East', 'South America', 'Asia' ];