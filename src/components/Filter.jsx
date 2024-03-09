// FilterComponent.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterspots } from '../utils/Slices/getDataSlice';

const filterOptions = [
    'France',
    'Greece',
    'Peru',
    'Australia',
    'United States'
]

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    // onFilterChange(newFilter);
    dispatch(filterspots(selectedFilter))
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="relative">
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className="py-2 px-4 pr-8 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled>
            Select Filter
          </option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
