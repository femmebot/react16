import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>You typed <code>{props.currentString}</code>. It has <code>{props.currentString.length}</code> characters.</p>
    </div>
  )
};

export default userOutput;
