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

/*
Pit Pat

Write a function pitPat(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.
*/

/*
1. write a function takes one arg
2. declare an empty array
3. write a for loop 
  3.1 write an if statement with the condition %4 = 0 but not %6 = 0 or %6 = 0 but not %4
  3.2 push index to the array
4. return the array
*/

/* 
func arg
  arr
  for %40 !%60 and %60 !%40
    arr push
  return arr
*/

/*
const pitPat = (max) => {
  const arr = [];
  for (i = 1; i <= max; i++) {
    if ((i % 4 === 0 && i % 6 !== 0) || (i % 6 === 0 && i % 4 !== 0)) {
      arr.push(i);
    }
  }
  return arr;
}
*/

// model answer calculated lcm of 3 and 4 good idea

let pitPat = function(max) {
  let nums = [];

  for (let i = 1; i <= max; i++) {
     // i % 4 0 or i % 6 0 but not % lcm = 0
      if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
          nums.push(i);
      }
  }

  return nums;
};

/* 
Double Sequence
Write a function doubleSequence that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence is always the "base", the subsequent elements can be generated by doubling the previous element of the sequence.
*/

/*
1. write a function accepts two args
2. declare an empty arr
3. write for loop from 1 to length inclusive
  3.1 check if arg1 = 1 
    3.1.1 push arg1
  3.2 else arg1 *= 2
    3.1.2 push arg2
4. return arr
*/

/*
func arg1 arg2
  arr
  for 1 arg2 ++ 
    if condition
      push arg1
    else 
      arg1 *= 2
      push arg1
return arr
*/

/* 
my answer
const doubleSequence = (base, length) => {
    const arr = [];
    for (let i = 1; i <= length; i++) {
        if (i === 1) {
            arr.push(base);
        } else {
            base *= 2;
            arr.push(base);
        }
    }
    return arr;
}


console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
*/

// model answer
let doubleSequence = function(base, length) {
  if (length === 0) {
      return [];
  }
  // making an array starting with base
  let seq = [base];
  // check if array.length is smaller than length value
  while (seq.length < length) {
    // getting current value to double the value
      let last = seq[seq.length - 1];
      let next = last * 2;
      // push the array the doubled value
      seq.push(next);
  }

  return seq;
};

/*
Triple Sequence

Write a function tripleSequence that takes in two numbers, start and length. The function should return an array representing a sequence that begins with start and is length elements long. In the sequence, every element should be 3 times the previous element. Assume that the length is at least 1.
*/

/* 
1. write an function accepts two arguments (start, length)
2. write an if statement to check if length is equal to 0 
  2.1 then return an empty array
3. write a sequence array with start value 
4. write a while loop (sequence array.length < length) 
  4.1 declare one variable to store the last calculated value
  4.2 declare one variable to calculate the value above * 3
  4.3 push the second variable into sequence array
5. return the sequence array
*/

/* 
func name start length
  if length 0 
    return []
  
  arr = [start]
  while 
    var1 arr[arr.length - 1]
    var2 var1 * 3
    push var2
  return arr
*/

/* my answer
function tripleSequence(start, length) {
    // your code here
    if (length === 0) {
        return [];
    }
    
    seq = [start];
    while (seq.length < length) {
        let lastValue = seq[seq.length - 1];
        let nextValue = lastValue * 3;
        seq.push(nextValue);
    }
    return seq;
}
*/

/* model answer 
function tripleSequence(start, length) {
    let seq = [start];
    for (let i = seq.length; i < length; i++) {
        seq.push(seq[seq.length - 1] * 3);
    }
    return seq;
}
*/


/*
Unique

Write a function unique that accepts an array as an argument. 
The function should return a new array containing elements of the input array, without duplicates.
*/

/*
1. write a function accepts an arg (arr)
2. create a loop searching from first index of the arr
  2.1 create a loop inside of loop, in order to search duplicate element (searching from second index)
  2.2 make an if statement if there's, then splice the element from the array
3. return arr
*/

/* function unique arr
    for i = 0 i < arr.length i++
      for j = 1 j < arr.length j++
        if arr[i] = arr[j]
        arr splice j
    return arr;
*/



// why do the result just omits only the first index?


// model answer
let unique = function(array) {
  let uniques = [];
  for (let i = 0; i < array.length; i++) {
      let el = array[i];
      if (!uniques.includes(el)) {
          uniques.push(el);
      }
  }
  return uniques;
};


