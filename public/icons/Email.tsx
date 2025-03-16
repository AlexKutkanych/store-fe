const Email = ({ className }: { className?: string }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 19.5H22V12V4.5H12H2V12V19.5Z"
      stroke="#212121"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M2 4.5L12 12L22 4.5"
      stroke="#212121"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 4.5H2V12"
      stroke="#212121"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 12V4.5H12"
      stroke="#212121"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Email;
