import React from 'react';

const Search = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="-3 -6 50 50">
    <path
      d="m21,38c9.39,0 17,-7.61 17,-17c0,-9.39 -7.61,-17 -17,-17c-9.39,0 -17,7.61 -17,17c0,9.39 7.61,17 17,17z"
      fill="none"
      id="svg_1"
      stroke="#333"
      strokeWidth="3"
    />
    <path
      d="m26.66,14.34c-1.45,-1.44 -3.45,-2.34 -5.66,-2.34c-2.21,0 -4.21,0.9 -5.66,2.34"
      fill="none"
      id="svg_2"
      stroke="#333"
      strokeWidth="3"
    />
    <path d="m33.22,33.22l8.49,8.49" id="svg_3" stroke="#333" strokeWidth="3" />
  </svg>
);

export default Search;
