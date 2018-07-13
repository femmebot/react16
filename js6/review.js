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


// it can be written more concisely as:

let double = number => number * 2;

console.log(double(2))

// **********************************************
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
import person from './person.js'  // with a default export, it can be named anything
import prs from './person.js'

import { baseData } from './utility.js'   // no default requires named export using curly braces
import { clean } from './utility.js'

// you may also assign an alias using 'as' keyword
import { baseData as baseDataAlias } from './utility.js'
// or you can import everything as an object which exposes all constants, etc. as properties
import * as bundled from './utility.js'

// **********************************************
// Classes in ES6

class Person {
    name = 'Max'    // define name property
    call = () => {  // define method
      // do something
    }
}

// instantiating a class; looks similar to constructor functions
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// inheritance; looks similar to prototypes
class Person extends Master


class Human {
  constructor() {
    this.order = 'primate';
  }
  printOrder() {
    console.log(this.order);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printOrder();

// **********************************************
// Understanding Classes, Properties, and Methods

// ES6 Properties
constructor() {
  this.myProperty = 'value'
}

// ES7
myProperty = 'value'

// ES6 Methods
myMethod() {
  // something goes here
}

// ES7
myMethod = () => {
  // something goes here
}

// rewriting the previous example in ES7
class Person extends Master


class Human {
  constructor() {
    order = 'primate';
  }
  printOrder = () => {
    console.log(this.order);
  }
}
class Person extends Human {

  name = 'Max';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printOrder();


// **********************************************
// Spread and Rest Operators

// Spread operator used to split up array elements or object Properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProp: 5}

// Rest operator used to merge a list of function arguments into an array
function sortArgs(...args) {
  return args.sort()
}

// example object using spread operator
const person = {
  name: 'Max'
}

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);


// **********************************************
// Destructuring
