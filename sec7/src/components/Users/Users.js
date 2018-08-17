import React, { Component } from 'react';
// import React from 'react';
import Person from './Person/Person';

class Users extends Component {

  constructor(props) {
    super(props);
    console.log('[Users.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Users.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Users.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Users.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE User.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons.age !== this.props.persons;  // return true or false to specify whether to update DOM
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE User.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE User.js] Inside componentDidUpdate');
  }

  render () {
    console.log('[Users.js] Inside render()');
    return this.props.persons.map( (person, index) => {

      return (
        <Person
          click = {() => this.props.clicked(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.props.changed(event, person.id)}/>
        )
      } );
  }
}

// const persons = (props) => {
//
//     return props.persons.map( (person, index) => {
//
//       return (
//         <Person
//           click = {() => props.clicked(index)}
//           name = {person.name}
//           age = {person.age}
//           key = {person.id}
//           changed = {(event) => props.changed(event, person.id)}/>
//         )
//       } );
//
// }


export default Users;
// export default persons;
