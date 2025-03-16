import React from 'react';

const Plus = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="0 0 35 35">
    <path d="M22.919 11.065h-10.011v-10.011c0-0.509-0.413-0.922-0.922-0.922s-0.922 0.413-0.922 0.922v10.011h-10.011c-0.509 0-0.922 0.413-0.922 0.922s0.413 0.922 0.922 0.922h10.011v10.011c0 0.509 0.413 0.922 0.922 0.922s0.922-0.413 0.922-0.922v-10.011h10.011c0.509 0 0.922-0.413 0.922-0.922s-0.413-0.922-0.922-0.922z"></path>
  </svg>
);

export default Plus;
