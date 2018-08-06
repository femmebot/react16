import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
  let stringLength = props.currentString.length;
  if (stringLength < 5) {
    return (
      <div className="ValidationComponent">
        <p>
          Text is too short.
        </p>
      </div>

    )} else {
      return (
        <div className="ValidationComponent">
          <p>
            Text is an acceptable length!
          </p>
        </div>
      )
    }

};

export default ValidationComponent;
