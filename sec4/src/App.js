import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    // doesShow ? this.setState.showPersonButtonLabel = "Show People" : this.setState.showPersonButtonLabel = "Hide People";
    doesShow ?
      this.setState({showPersonButtonLabel: "Show People"})
    :
      this.setState({showPersonButtonLabel: "Hide People"});
  }

  nameChangedHandler = (event, id) => {
    // alternatively, if using ID instead of index, you can use find()
    // return only if true
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // use spread operator so we don't mutate the array directly
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = person;

    // this.setState({
    //   persons: [
    //     { name: "Maximilian", age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Stephanie", age: 26 }
    //   ]
    // })

    // now we can rewrite the above
    this.setState({
      persons: personsCopy
    });
  }

  deletePersonHandler = (personIndex) => {
    // console.log('delete handler clicked');

    // slice makes a copy of the original array
    // const persons = this.state.persons.slice;

    // ES6 method preferred using the Spread operator
    const personsCopy = [...this.state.persons];

    personsCopy.splice(personIndex, 1);
    this.setState({persons: personsCopy});
  }

  // bind method preferred over passing anonymous function for performance
  // <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

  render() {
    const buttonStyle = {
      backgroundColor: '#0BD',
      borderRadius: '3px',
      border: 'none',
      padding: '6px 12px 8px 12px',
      fontSize: '14px',
      color: '#000',
      width: '120px',
      ':hover': {
        backgroundColor: '#0cf'
      }
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              // alternative; use bind.this index method instead of anonymous function
              return <Person
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }
        </div>
      );
      buttonStyle.backgroundColor = '#e50';
      buttonStyle.color = "#fff";
      buttonStyle[':hover'] = {
        backgroundColor: '#c00'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('allcaps');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <p className={classes.join(' ')}>
            This is really working!
          </p>
          <button
            style={buttonStyle}
            onClick={this.togglePersonHandler}>{this.state.showPersonButtonLabel}
          </button>
          {persons}
        </div>
      </StyleRoot>

    );

    // using conditional with ternary expression

    // return (
    //   <div className="App">
    //     <h1 className="App-title">Welcome to React</h1>
    //     <button
    //       style={buttonStyle}
    //       onClick={this.togglePersonHandler}>Switch Name
    //     </button>
    //
    //   { this.state.showPerson ?
    //   <div>
    //       <Person
    //         name={this.state.persons[0].name}
    //         age={this.state.persons[0].age}/>
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'Max!')}
    //         changed={this.nameChangedHandler}>My hobbies: Racing
    //         </Person>
    //       <Person
    //         name={this.state.persons[2].name}
    //         age={this.state.persons[2].age}/>
    //     </div> : null
    //   }
    //
    //   </div>
    // );

    // return(React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! Let’s do this!!!')))
  }
}

export default Radium(App);
