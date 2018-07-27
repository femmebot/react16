import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
    { name: "Giovanni Palandrani", dragName: "Aquaria" },
    { name: "Sutan Amrull", dragName: "Raja" },
    { name: "Jack Dorsey", dragName: "" }
  ]}

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Giovanni Palandrani", dragName: "Aquaria" },
        { name: "Sutan Amrull", dragName: "Raja" },
        { name: "Jack Dorsey", dragName: event.target.value }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed = {this.nameChangedHandler}/>
        <UserOutput
          name = {this.state.persons[0].name}
          dragName = {this.state.persons[0].dragName}/>
        <UserOutput
          name = {this.state.persons[1].name}
          dragName = {this.state.persons[1].dragName}/>
        <UserOutput
          name = {this.state.persons[2].name}
          dragName = {this.state.persons[2].dragName}
          currentName = {this.state.persons[2].dragName}/>
        <UserOutput
          name = "Matthew James Lent"
          dragName = "Pearl"/>
      </div>

    );
  }
}

export default App;
