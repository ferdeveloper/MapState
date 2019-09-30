import React from 'react';

const Button = (props) => {
  const { children } = props;
  return (
    <button type="submit">
      {children}
    </button>
  );
};

export default Button;