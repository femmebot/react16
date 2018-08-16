import React, { Component } from 'react';
import styles from './App.css';  // can be any name import style from webpack module
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Maximilian", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPerson: false,
    showPersonButtonLabel: "Show People"
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = person;

    this.setState({
      persons: personsCopy
    });
  }

  deletePersonHandler = (personIndex) => {
    const personsCopy = [...this.state.persons];

    personsCopy.splice(personIndex, 1);
    this.setState({persons: personsCopy});
  }

  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}/>
      ;
    }

    return (
      <div className={styles.App}>
        <Cockpit
          title = {this.props.pageTitle}
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );

  }
}

export default App;
