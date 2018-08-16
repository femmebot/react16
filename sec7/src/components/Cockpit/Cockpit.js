import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = null;
  let showPerson: false;
  let showPersonButtonLabel: "Show People";

  if (props.showPerson) {
    btnClass = styles.btnRed;
    showPersonButtonLabel = "Show People";
  } else {
    showPersonButtonLabel = "Hide People";
  }

  if ( props.persons.length <= 2 ) {
    assignedClasses.push ( styles.red );
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push ( styles.allcaps );
  }


  return(
    <div className={styles.Cockpit}>
      <h1>Hi! I’m a React app!</h1>
      <p className={assignedClasses.join(' ')}>
        This is really working!
      </p>
      <button
        className={btnClass}
        onClick={props.clicked}>{showPersonButtonLabel}
      </button>
    </div>
  );

};

export default cockpit;
