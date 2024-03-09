// SearchBar.js

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchspots } from '../utils/Slices/getDataSlice';

const SearchBar = () => {

    const [searchVal,setSearchVal] = useState()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(searchspots(searchVal))   
    },[searchVal,dispatch])

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search By City"
          className="py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          value={searchVal}
          onChange={(e)=>setSearchVal(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
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
              d="M21 21l-6-6m-1.414-1.414A10 10 0 1113.414 4.586 8 8 0 1021 12h-2.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
