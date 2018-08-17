import React from 'react';
import styles from './Dashboard.css';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = null;
  let showPersonButtonLabel = "Show People";

  if (props.showPerson) {
    btnClass = styles.btnRed;
    showPersonButtonLabel = "Hide People";
  } else {
    showPersonButtonLabel = "Show People";
  }

  if ( props.persons.length <= 2 ) {
    assignedClasses.push ( styles.red );
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push ( styles.allcaps );
  }


  return(
    <div className={styles.Dashboard}>
      <h1>{props.title}</h1>
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
