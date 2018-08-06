import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

  let validationMessage = "Text is an acceptable length!"

  if (props.currentString.length <= 5) {
    validationMessage = "Text is too short."
  }

  return (
    <div className="ValidationComponent">
      <p>
        {validationMessage}
      </p>
    </div>
  )
  
};

export default validationComponent;
