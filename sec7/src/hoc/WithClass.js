import React from 'react';

// using shorthand for return function
const WithClass = (props) => (
  <div className = {props.styles}>
    {props.children}
  </div>
);

export default WithClass;
