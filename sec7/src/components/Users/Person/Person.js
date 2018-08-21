import React, { Component } from 'react';
// import React from 'react';
import PropTypes from 'prop-types'; // install using `npm install --save prop-types`
import styles from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render () {
    console.log('[Person.js] Inside render()');

    return (
      // <div className={styles.Person}>
      <WithClass styles={styles.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </WithClass>
      // </div>
    )

  }

};

// const person = (props) => {
//
//   return (
//     <div className={styles.Person}>
//       <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text"
//         onChange={props.changed}
//         value={props.name}/>
//     </div>
//   )
//
// };

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func 
};

export default Person;
// export default person;
