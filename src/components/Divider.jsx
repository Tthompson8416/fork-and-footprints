import React from 'react';

// Static imports for each country
import belgiumFlag from '../assets/flags/belgium.svg';
import belizeFlag from '../assets/flags/belize.svg';
// Add other imports similarly...

const Divider = ({ country }) => {
  let imageSrc;

  // Dynamically set the image based on the country name
  switch (country.name.toLowerCase()) {
    case 'belgium':
      imageSrc = belgiumFlag;
      break;
    case 'belize':
      imageSrc = belizeFlag;
      break;
    // Add other cases for the rest of the countries
    default:
      imageSrc = null; // You could use a default image here if needed
  }

  return (
    <div className="bg-blue-500 text-white py-6 flex items-center justify-center space-x-4">
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={country.name} 
          className="w-12 h-12" 
        />
      )}
      <span className="text-xl font-semibold">{country.name}</span>
    </div>
  );
};

export default Divider;
