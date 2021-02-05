import React from 'react';

const Button = ({ value, onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
