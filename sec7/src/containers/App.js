import React, { PureComponent } from 'react';
// import React, { Component } from 'react';
import styles from './App.css';  // can be any name import style from webpack module
import Users from '../components/Users/Users';
import Dashboard from '../components/Dashboard/Dashboard';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
// class App extends Component {

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: 1, name: "Maximilian", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 },
      { id: 4, name: "Madonna", age: 60 }
    ],
    showPerson: false,
    showPersonButtonLabel: "Show People",
    toggleClicked: 0
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    // this.setState({showPerson: !doesShow});

    // best practice preferred functional syntax for mutating state because setState runs async
    this.setState( ( previousState, props ) => {
        return {
          showPerson: !doesShow,
          toggleClicked: previousState.toggleClicked + 1
        }
      });
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
      <WithClass styles={styles.App}>
      // <div className={styles.App}>
        <Dashboard
          title = {this.props.pageTitle}
          showPerson = {this.state.showPerson}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
        {persons}
      // </div>
      </WithClass>

    );

  }
}

export default App;
