import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
      <div className="CharComponent">
        <a href="#">{props.character}</a>
      </div>
  )
}

export default charComponent;
