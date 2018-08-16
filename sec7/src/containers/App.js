import React, { Component } from 'react';
import styles from './App.css';  // can be any name import style from webpack module
import Persons from '../components/Persons/Persons';

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
    doesShow ?
      this.setState({showPersonButtonLabel: "Show People"})
    :
      this.setState({showPersonButtonLabel: "Hide People"});
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
    let btnClass = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}
            changed = {this.nameChangedHandler}/>
        </div>
      );

      btnClass = styles.btnRed;

    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push ( styles.red );
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push ( styles.allcaps );
    }

    return (
      <div className={styles.App}>
        <h1 className="App-title">Welcome to React</h1>
        <p className={classes.join(' ')}>
          This is really working!
        </p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>{this.state.showPersonButtonLabel}
        </button>
        {persons}
      </div>
    );

  }
}

export default App;
