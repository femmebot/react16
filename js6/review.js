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

<<<<<<< HEAD
// **********************************************
=======
// *********************************************
>>>>>>> fc5b39bdf922a5c64dfc0e75fa218a9bf51d1524
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

<<<<<<< HEAD
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
=======
import { baseData } from 'utility.js'   // no default requires named export using curly braces
import { clean } from 'utility.js'


<<<<<<< HEAD
//
>>>>>>> 8e9dcc949a5886428ea994fcec35cbae8bda8faf
=======
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

// Easily extract array elements or object properties and store them in variables

// Array destructuring
[a, b] = ['Hello', 'max'];
console.log(a) // Hello
console.log(b) // max

// Object destructuring
{name} = {name: 'Max', age: 28};
console.log(name) // Max
console.log(age) // undefined

// example
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);

[num1, , num3] = numbers;
console.log(num1, num3);




// *********************************************
// Reference and Primitive Types
