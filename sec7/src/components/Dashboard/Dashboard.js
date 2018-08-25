import React from 'react';
import styles from './Dashboard.css';
import Aux from '../../hoc/Aux';

const dashboard = (props) => {

  const assignedClasses = [];
  let btnClass = styles.Button;
  // let btnClass = null;
  let showPersonButtonLabel = "Show People";

  if (props.showPerson) {
    btnClass = [styles.Button, styles.btnRed].join(' ');
    //     btnClass = styles.btnRed;
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
    // <div className={styles.Dashboard}>
    // React 16.2 supports Fragments using empty JSX tags
    // <>
    <Aux>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>
        This is really working!
      </p>
      <button
        className={btnClass}
        onClick={props.clicked}>{showPersonButtonLabel}
      </button>
    </Aux>
    // </>
    // </div>
  );

};

export default dashboard;
