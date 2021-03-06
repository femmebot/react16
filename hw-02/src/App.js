import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';



class App extends Component {

  state = {
    textString: 'Hello!'
  }

  inputChangedHandler = (event) => {
    this.setState({
      textString: event.target.value
    });
  }

  removeCharacterHandler = (charIndex) => {
    const text = this.state.textString.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({textString: updatedText});
  }

  render() {

    let charArray = this.state.textString.split('').map((ch, charIndex) => {
      return <CharComponent
        character = {ch}
        key = {charIndex}
        click = {() => this.removeCharacterHandler(charIndex)}
        />;
    });

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in <code>App</code> component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
          </li>
          <li>
            Create a new component (=> <code>ValidationComponent</code>) which receives the text length as a prop.
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" of "Text acceptable length". E.g. take 5 as a minimum length.
          </li>
          <li>
            Create another component (=> <code>CharComponent</code>) and style it as an inline box (=> <code>display: inline-block</code>, <code>padding: 16px</code>, <code>text-align: center</code>, <code>margin: 16px</code>, <code>border: 1px solid #000</code>).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from an entered text.
          </li>
        </ol>

        <UserInput
          changed = {this.inputChangedHandler}
          currentString = {this.state.textString}/>
        <ValidationComponent
          currentString = {this.state.textString}/>
        <UserOutput
          currentString = {this.state.textString}/>

        {charArray}

      </div>
    );
  }
}

export default App;
