'use strict';

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Yuna'); // Hey, Yuna
greeterHey('Steven'); // Hey, Steven

greet('Hello')('Yuna'); // Hello, Yuna

// The function returning callback function could be important for functional programming

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting}, ${name}`);
  }
}

// or
const greet3 = greeting => name => console.log(`${greeting}, ${name}`);
