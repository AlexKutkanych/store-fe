import React from 'react';

const ArrowButton = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
  >
    <path
      d='M14 8H1.99998'
      stroke='#212121'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 4L14 8L10 12'
      stroke='#212121'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowButton;
