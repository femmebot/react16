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

//
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


//
// Destructuring
