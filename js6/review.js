// let, const

// arrow functions

// old js function
function myFunctionName() {
  // something goes here
}

function printMyName() {
  console.log(name);
}

printMyName('Max');


// new arrow function syntax
const myFunctionName = () => {
  // something goes here
}

const printMyName = (name) => {
  console.log(name);
}

printMyName('Max');

// for one argument, you can omit parenthesis
const printMyName = name => {
  console.log(name);
}

// if function body only returns one thing, for example:

// let double = (number) => {
//   return (number * 2);
// }
// console.log(double(2))


// it can be written more concisely

let double = number => number * 2;

console.log(double(2))

// *********************************************
// Exports & Imports (Modules)

// person.js
const person = {
  name: 'Max';
}
export default Person

// utility.js
export const clean = () => {
  // something
}
export const baseData = 10;

// app.js
import person from './person.js'  // because person has default, it can be called anything
import prs from './person.js'

import { baseData } from 'utility.js'   // no default requires named export using curly braces
import { clean } from 'utility.js'


// *********************************************
// Understanding classes

class Human {
  constructor() {
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    this.gender = 'female';
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();




// *********************************************
// Classes, Properties and Methods

// ES6
// Properties are like variables attached to classes/objects
constructor () {
  this.myProperty = 'value'
}

// ES7
// you can assign value directly to Property
myProperty = 'value'

// ES6
// Methods are like functions attached to classes/objects
myMethod () {
  // something goes here
}

// ES7
myMethod = () => {
  // something goes here
}

// rewriting previous example from Classes
class Human {
  gender = 'male';
  printGender = () => {
    console.log(this.gender);
  }
}
class Person extends Human {
  name = 'Max'
  gender = 'female'

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();



// *********************************************
// The Spread and Rest Operator ...

// Spread is used to split up array elements or object properties
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};

// Rest is used to merge a list of function arguments into an array
function sortArgs(...args){
  return args.sort();
}

// Spread operator examples
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4
console.log(newNumbers);

const person = {
  name: 'Max';
}

const newPerson = {
  ...person,
  age: 28;
}
console.log(newPerson);

// Rest operator example
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));






// *********************************************
// Destructuring



// *********************************************
// Reference and Primitive Types
