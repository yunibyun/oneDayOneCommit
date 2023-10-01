/*
Add To Array Research
Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array. If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. (Hint: Look up the JavaScript functions: push/pop/shift/unshift)
*/

/*
mutate the original array (no slice or sth similar)
1. make a function which has 3 arguments (location, element, arr)
  2-1 make a if statement that the condition is equal to FRONT
    2-1-1 unshift an element on the given array
  2-2 make an else if statement that the condition is equal to BACK
    2-2-1 push an element on the given array
  2-3 make an else statement that prints an error
    2-3-1 log "ERROR"
*/

/*

func name argu1 argu2 argu3
  if condition 1
    unshift
  else if condition 2
    push
  else
    log

*/


function addToArray(location, element, arr) {
  if (location === "FRONT") {
    arr.unshift(element);
  } else if (location === "BACK") {
    arr.push(element);
  } else {
    console.log("ERROR");
  }
};


/* 
Range

Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive.
*/

/*
1. make a function accepts two arguments
2. declare an empty array
3. making a loop starting from min and max
4. inside of the loop write statement pushing elements into the array-
5. return the array
*/

/*
func range (min max) 
    arr
    for loop 
        pushing each index
    return arr
*/

const range = function (min, max) {
  const arr = [];
  for (i = min; i <= max; i++) {
      arr.push(i);
  }
  return arr;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

/*
Even Numbers

Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax.
*/

/*
Using function expression
1. declare a function expression accepts an arg
2. declare an empty array
3. make a backword loop less then the arg
  3-1 make an if statement checking condition (even number)
  3-2 unshift index to the array
4. return the array
*/


/*

const func arg
  const arr
  for backward loop
    if condition
      unshift index to arr
  return arr

*/

const evenNumbers = (max) => {
  const arr = [];
  for (i = max - 1; i > 0; i--) {
    if (i % 2 === 0) {
      arr.unshift(i);
    }
  }
  return arr;
}

/* or
const evenNumbers = (max) => {
    const arr = [];
    for (i = 1; i < max; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
  return arr;
}
*/

/*
Log Between Stepper Recall

Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals. See the following examples.

Hint: this function only needs to print using console.log it does not need to return.
*/

/* 
1. declare an function expression with 3 args
2. looping index from min including max and +=step
  2.1 log i
*/

/*
const func arg1 arg2 arg3 {
  for arg1 <=arg2 +=arg3
    log i
}
*/

const logBetweenStepper = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
};

/*
Factors Of

Write a function factorsOf(num) that takes in a number as an arg. The method should return an array containing all positive numbers that are able to divide into num with no remainder.

Define this function using function expression syntax.
*/

/*
using function expression
1. write an function takes one arg
  1.1 declare an empty arr
2. write a for loop from 1 to num, inclusive
  2.1 write an if statement check num % index = 0
    2.1.1 push index
  1.2 return arr
*/

/*
func arg
  arr
  for i num ++
    if condition
      push
  return arr
*/

const factorsOf = (num) => {
  const arr = [];
  for (i = 1; i <= num, i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

/*
Fizz Buzz Array

Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
*/

/*
1. write a function that takes an arg
  1.1 declare an empty arr
2. make a for loop from 1 exclusive max
  2.1 an if statement checking %3 = 0 and not %5 = 0 and also checking %5 = 0 and not %3 = 0
    2.1.1 push i to arr
3. return arr
*/

/*
func arg
  arr
  for i max ++
    if condition
      push
  return arr
*/

const fizzBuzz = (max) => {
  let arr = [];
  for (i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      arr.push(i);
    }
  }
  return arr;
}

/*
function fizzBuzz(max) {
  const arr = [];
  for (i = 1; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0))  {
      arr.push(i);
    }
  }
  return arr;
}
*/

