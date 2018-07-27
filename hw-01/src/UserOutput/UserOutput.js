import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>I’m {props.name}.</p>
      <p>My drag name is {props.dragName}.</p>
    </div>
  )
};

export default userOutput;
