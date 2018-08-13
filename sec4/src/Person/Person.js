import React from 'react';
// import Radium from 'radium';
import styles from './Person.css';

const person = (props) => {
  // styles for use with Radium
  // const personStyle = {
  //   '@media (min-width: 600px)': {
  //     maxWidth: '500px',
  //     margin: '10px auto'
  //   }
  // }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text"
        onChange={props.changed}
        value={props.name}/>
    </div>
  )

  // dynamic styles using Radium
  // return (
  //   <div className="Person" style={personStyle}>
  //     <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
  //     <p>{props.children}</p>
  //     <input type="text"
  //       onChange={props.changed}
  //       value={props.name}/>
  //   </div>
  // )
};

// export default Radium(person);
export default person;
