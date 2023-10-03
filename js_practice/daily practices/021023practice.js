/*
Yeller

Write a function yeller(words) that takes in an array of words. The function should return a new array where each element of the original array is yelled.
*/

/* 
1. write a function accpets an arg (array)
2. declare an new array in function
3. return a "new array" that every element is uppercased
  -> for uppercase the loop needed (for loop)
  -> using .upperCase inside of the loop
  -> and then push the uppercased element
4. return new array
*/

/* 
writing pseudo code

const yeller words
  resultArr
  el
    for i 0 i <= words.length i++
      el = word[i].toUpperCase()
      resultArr push
return resultArr
*/

const yeller = (words) => {
  const resultArr = [];
  let el;
    for (let i = 0; i < words.length; i++) {
      el = words[i].toUpperCase();
      resultArr.push(el);
    }
 return resultArr;
}

/* 
Tripler

Write a function tripler(nums) that takes in an array as an arg. The function should return a new array containing three times every number of the original array.
*/

/*
1. write a function accepts one arg (array)
2. declare a new empty array
3. declare an element variable
4. return a "new array", containing 3 times every number of original array
   -> need a loop in order to iterate each element of the array
   -> el = arr[i] *3 
   -> push el to the empty array
*/

/*
pseudo code

tripler nums 
  arr
  el
    for
      el * 3
      push el
return arr

*/

const tripler = (nums) => {
  const resultArr = [];
  let el;
    for (let i = 0; i < nums.length; i++) {
      el = nums[i] * 3;
      resultArr.push(el);
    }
  return resultArr;
}

// model answer
let tripler = function(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      newNums.push(num * 3);
  }

  return newNums;
};


/* 
Long words
Write a function longWords(words) that takes in an array of words. The function should return an array containing only the words that are longer than 5 characters.
*/

/* 
1. write a function takes one arg (array)
2. declare a new array
3. write a loop in order to iterate through the array
  3.1 write an if statement to check if length > 5
    3.1.1 push the element into the new array
4. return the new array
*/

/*
pseudo code
func words
  arr
  for
    if words[i].length > 5
      arr push words[i]
return arr
*/

const longWords = (words) => {
  const resultArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      resultArr.push(words[i]);
    }
  }
  return resultArr;
}

onsole.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

// model answer
let longWords = function(words) {
  let filteredWords = [];
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 5) {
          filteredWords.push(word);
      }
  }
  return filteredWords;
};

/*
Choosey Endings

Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. The function should return a new array containing the words that end in the given suffix. If the value passed in is not an array, return an empty array. HINT: There are built in JavaScript functions that will help with determining if a strings ends a certain way. Go see if you can find it on MDN!
*/

/*

1. write a function accepts two args (arr / string)
2. declare an empty array
3. write a for loop to iterate through the array
  3.1 write an if statement to check the elements finished with given suffix 
   -> String.prototype.endsWith()
    3.1.1 if true then push arr[i] into the new array
4. return a new array containing the words that end in the given suffix

*/

/* 
pseudo code
choosyEndings func arr suffix
  arr 
    for
      if arr[i].endswith(suffix) 
        arr push arr[i]
  return arr

*/


const chooseyEndings = (words, suffix) => {
  const arr = [];
    for (i = 0; i < words.length; i++) {
      if (words[i].endsWith(suffix)) {
        arr.push(words[i]);
      }
    }
  return arr;
}

// model answer
let chooseyEndings = function(words, suffix) {
  if (!Array.isArray(words)) {
    return [];
  }

  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.endsWith(suffix)) {
      filteredWords.push(word);
    }
  }

  return filteredWords;
};


/*
Common Factors
Write a function commonFactors that accepts two numbers as arguments. The function should return an array containing positive numbers that are able to divide both arguments.
*/

/*
1. write a function that accepts two argument
2. declare an empty array
3. check condition (arg1> arg2) or (arg1< arg2)
4. make a loop
  4.1 make a condition (arg1 % i === 0 && arg2 % i === 0)
    4.1.1 push i to the new array
5. return the new array
*/


/*
func arg1 arg2
  arr
  if arg1>arg2
    for 
      if (arg1%i = 0 and arg2%1 = 0)
        arr push i
  else if arg1<arg2
    for
      if (arg1%i = 0 and arg2%1 = 0)
        arr push i
return arr
*/

const commonFactors = (arg1, arg2) => {
  const arr = [];
  if (arg1 >= arg2) {
    for (let i = 0; i <= arg1; i++) {
      if (arg1 % i === 0 && arg2 % i === 0) {
        arr.push(i);
      }
    }
  } else if (arg1 < arg2) {
    for (let j = 0; j <= arg2; j++) {
      if (arg1 % j === 0 && arg2 % j === 0) {
        arr.push(j);
      }
    }
  }
  return arr;
}

// model answer
// seems like I don't have to wrtie a condition which argument is bigger (arg1, arg2)
let commonFactors = function(num1, num2) {
  let factors = [];
  for (let i = 1; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
          factors.push(i);
      }
  }
  return factors;
};

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]

/*
Adjacent Sums

Write a function adjacentSums that accepts an array of numbers as an argument. The function should return a new array containing the sum of each pair of elements in the input array.
*/

/*
1. Write a function accepts an array
2. make a new empty array
3. write a loop in order to iterate through the given array
  3.2 push the arr[i] + arr [i+1] to the empty array
4.Return the new array 
*/

/*
pseudocode

func arg
arr
for
  arr push(arg[i] + arg[i + 1])
return arr
*/

const adjacentSums = (arr) => {
  const resultArr = [];
  for (i = 0; i < arr.length - 1; i++) {
    resultArr.push(arr[i] + arr[i + 1]);
  }
  return resultArr;
}

//model answer
let adjacentSums = function(array) {
  // checking if the argument is array
  if (!Array.isArray(array)) {
    throw 'Not an array!';
  }

  let sums = [];
  for (let i = 0; i < array.length - 1; i++) {
    let sum = array[i] + array[i + 1];
    sums.push(sum);
  }
  return sums;
};

/* 
Fibonacci Sequence

Write a function fibonacciSequence that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.
*/

/*
write a function accepts a number as arg
declare an empty array
write a for loop
  declare a variable to store last value = 1
  declare a variable to store next value
  check if it's 0 or 1
    last = 1
    next = 1
    push 1 to arr
  if it's >= 2 
    
    push last + next