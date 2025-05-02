import React from 'react';
import { feature } from './destinationarray'; // Import the array of featured destinations

function Destination() {
  return (
    <div className='w-full px-3 py-12 bg-white'>
      {/* Section heading */}
      <h3 className='text-black font-bold mb-6 text-3xl'>
        Featured Destination
      </h3>

      {/* Responsive grid layout: 4 columns by default, 2 on medium screens, 1 on small */}
      <div className='w-full px-2 grid gap-[10px] grid-cols-4 sm:grid-cols-1 md:grid-cols-2'>
        
        {/* Iterate over each destination in the feature array */}
        {feature.map((a, c) => (
          <div 
            key={c} // Consider replacing 'c' with a unique ID from the data if available
            className='h-[250px] object-cover shadow-lg shadow-gray-300'
          >
            {/* Image with hover effect */}
            <img
              className='w-full h-[50%] object-fill cursor-pointer transform transition duration-300 hover:scale-105'
              src={a.image}
              alt="gfff" // Replace with alt={a.name} for better accessibility
            />

            {/* Destination name */}
            <p className='mb-1 font-bold text-2xl sm:text-1xl'>
              {a.name}
            </p>

            {/* Destination description */}
            <p>{a.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
