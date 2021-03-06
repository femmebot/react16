import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Maximilian", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');

    // use special setState method from Component to update DOM
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    })
  }

  // bind method preferred over passing anonymous function for performance
  // <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>

  render() {
    const buttonStyle = {
      backgroundColor: '#0BD',
      borderRadius: '3px',
      border: 'none',
      padding: '6px 12px'
    };

    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My hobbies: Racing
          </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );

    // return(React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! Let’s do this!!!')))
  }
}

export default App;
