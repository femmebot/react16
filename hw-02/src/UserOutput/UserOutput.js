import React from 'react';

const userOutput = (props) => {
  let stringLength = props.currentString.length;
  return (
    <div>
      <p>You typed <code>{props.currentString}</code>. It has <code>{stringLength}</code> characters.</p>
    </div>
  )
};

export default userOutput;
