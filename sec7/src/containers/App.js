import React, { Component } from 'react';
import styles from './App.css';  // can be any name import style from webpack module
import Users from '../components/Users/Users';
import Dashboard from '../components/Dashboard/Dashboard';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  state = {
    persons: [
      { id: 1, name: "Maximilian", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
      { id: 4, name: "Madonna", age: 60 }
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

    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPerson) {
      persons = <Users
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangedHandler}/>
      ;
    }

    return (
      <div className={styles.App}>
        <Dashboard
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
