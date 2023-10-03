/*
Fibonacci Sequence

Write a function fibonacciSequence that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.
*/

let fibonacciSequence = function(length) {
  if (length === 0) {
      return [ ];
  } else if (length === 1) {
      return [ 1 ];
  }

  let seq = [1, 1];
  while (seq.length < length) {
      let last = seq[seq.length - 1];
      let secondLast = seq[seq.length - 2];
      let next = last + secondLast;
      seq.push(next);
  }
  return seq;
};

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]

/* 
Pick Primes

Write a function pickPrimes that takes in an array of numbers and returns a new array containing only the prime numbers.
*/

/* 
1. write a function to check if the number is prime
  1.1 if num < 2 ; return false
  1.2 write a loop
    1.2.1 if num % i === 0
      1.2.1.1 return false
  1.3 return true
2. write a function takes an arg (an array)
3. declare an new empty array
4. write a for loop
  4.1 check if (array[i]) is prime 
  4.1.1 push arr[i]
5. return the new array
*/

/* pseudocode

func isPrime arg
  if arg < 2
    return false
  for 
    return false
return true

func pickPrimes arr
  newArr

  for 
    if isPrime arr[i]
      newArr.push(arr[i])
  return newArr

*/


const isPrime = function (number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const pickPrimes = function (arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
      if(isPrime(arr[i])) {
        newArr.push(arr[i]);
      }
  }
  return newArr;
}

/* 
Greatest Factor Array
Write a function greatestFactorArray that takes in an array of numbers and returns a new array where every even number is replaced with it's greatest factor. A greatest factor is the largest number that divides another with no remainder. For example, the greatest factor of 16 is 8. (For the purpose of this problem we won't say the greatest factor of 16 is 16, because that would be too easy).
*/

/*

1. write a function to calculate greatest factor
  1.1 declare an empty array
  1.2 write a for loop (exclude the given number)
  1.3 num % i === 0
    1.2.1 calculate the largest number between them, but how?
      push elements, and get only the last index? [-1] array.slice(-1)[0]


2. write a function greatestFactorArray
  2.1 declare an empty array
  2.2 calculate the largest number by calling the above function
  2.3 push the result
  2.4 return the new empty array

*/

/* 
pseudocode

func gratestFactor num
  arr
  for
   if num % i === 0
    push arr[i]
  
  return arr.slice[-1];


func greatestFactorArray array
  newArr
  for
    newArr.push(greatestFactor(array[i]));
  return newArr
*/

/* Okay, My answer seems good 
when it comes to get the second greatest factor,
and if there's no second greatest factor then return original number
but in the problem they want to me only replace 'even numbers' as the second greatest factor.
*/

const greatestFactor = function (number) {
  const arr = [];
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  //need to add [0] in order to return as a number, not as an array
  /*
  arr.slice(-1) returns an array with the last element.
  arr.slice(-1)[0] returns the last element as a single value.
  But this returns undefined in case of 7...
  */
  // return arr.slice(-1)[0];
  
  // write a ternary statement if there's more than one element in the array
  /*
  arr.length > 0: This part checks whether the arr array contains any elements. If it does, it means that factors were found for number, and the condition evaluates to true.
  arr.slice(-1)[0]: If arr.length > 0 is true, this part of the code is executed. It takes the last element of the arr array (which is the greatest factor found) using arr.slice(-1) and then extracts it from the array using [0]. This ensures that the function returns the greatest factor when factors are found.
  : number: If arr.length > 0 is false, meaning no factors were found, the code after the colon : is executed. In this case, it simply returns the original number itself because, by definition, a number is always divisible by itself.
  */ 
  return arr.length > 0 ? arr.slice(-1)[0] : number;

}

const greatestFactorArray = function (array) {
    const newArr = [];
    for (i = 0; i < array.length; i++) {
      newArr.push(greatestFactor(array[i]));
    }
  return newArr;
}


/* Understand the question wrongly, so do it again */

/* 
Problem
We are given an array of numbers and wants to return a new
array every Even number is replaced with it's the second greatest factor.
The second greatest Factor is the second largest number that devides another
with no remainder. 

Example
Input [16, 7, 9, 14] 
Output [8, 7, 9, 7]

Input [30, 3, 24, 21, 10]
Output [15, 3, 12, 21, 5]

Data 
We'll working with an array to store the elements and replaced elements.

Algorithm
1. Write a function first to calculate the second greatest Factor
  1.1 declare an empty array to store the elements
  1.2 write a for loop (exclude the given number)
  1.3 num % i === 0
    1.2.1 push elements
  1.4 return the value of last index only by doing array.slice(-1)[0]
    if we do arr.slice(-1) then it will return the array so need to array.slice(-1)[0]

2. write a function to replace Even numbers as second greatest Factor from the given array
  2.1 declare an empty array to store the elements
  2.2 write a for loop to iterate the given array
    2.2.1 write an if statement to check the element is an even number
      2.2.1.1 if true, then call the above function (second greatest factor)
      2.2.1.2 and then push to the empty array
    2.2.2 write an else statement to push element (this case the odd numbers)
  2.3 return the new array

PseudoCode
This function will calculate the Second Greatest Factor the case of the Even number
func secondGreatestFactor num
  arr 
  for
    if num % i === 0
      push 
  return arr.slice(-1)[0]
  
func greatestFactorArray array
  newArr
  for
    if array[i] % 2 === 0
      newArr push (secondGreatestFactor(array[i]))
    else 
      push array[i]
  return newArr

Code

const secondGreatestFactor = function (num) {
  const arr = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.slice(-1)[0];
}

const greatestFactorArray = function (array) {
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      resultArr.push(secondGreatestFactor(array[i]));
    } else {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

Testing
it produces the expected outputs!
*/


console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]


/*

Summation Sequence
A number's summation is the sum of all positive numbers less than or equal to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6, the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. Write a function summationSequence that takes in two numbers: start and length. The function should return an array containing length total elements. The first number of the sequence should be the start number. At any point, to generate the next element of the sequence we take the summation of the previous element. You can assume that length is not zero.

*/

/*
Problem
We are given two positive numbers, start number and length (total elements).
and want to return an array having length. The first element of the array is start,
and we calculate sum of all positive numbers equal to the previous element and assign it as next element.

Example
Input [3, 4]
Output [3, 6(1+2+3), 21(1+2+3+4+5+6), 231(1+2+3....+20+21)]

Input [5, 3]
Output [5, 15(1+2+3+4+5), 120(1+2+3...+14+15)]

Data 
We'll working with an array to store the calculated sum

Algorithm
calculateSum
1. Declare an empty array in order to store the elements
2. We have to divide the numbers, like from 3 to 1 2 3. 
    -> Is there any methods that I can use? 
  2.1 -> Otherwise write a loop from number and --
    2.1.1 Since the order of array isn't important 
    (since it will be used to calculate sum), I will just push each i
3. Declare a variable to store the sum
4. Write a for loop in order to calculate the sum
  3.1 reassign sum as += dividedNumbers[j]
5. return sum;

summationSequence
1. Declare an empty array in order to store the elements
2. Declare a variable to store the start value
3. write a for loop to iterate the length
  3.1 write an if statement with condition i = 0; 
    3.1.1 push start to the new Array
  3.2 write an else statement
    3.2.1 call the function with start value and reassign start value
    3.2.2 push the start value to the array
4. return the array


PseudoCode
func calculateSum num
  arr
  for let i = num i > 0 i--
    arr push i
  
  let sum 0

  for
    sum+=dividedNumbers[j]
  
  return sum

func summationSequence start length
  resultArr
  startValue = start

  for 
    if i === 0
      resultArr push start
    else 
      startValue = calculateSum(start)
      push startValue
  return resultArr

Code

const calculateSum = function (num) {
  const dividedNumbers = [];
  for (let i = num; i > 0; i--) {
    dividedNumbers.push(i);
  }

  let sum = 0;
  for (let j = 0; j < dividedNumbers.length; j++) {
    sum += dividedNumbers[j];
  }
  return sum;
}

const summationSequence = function (start, length) {
  const resultArr = [];
  let startValue = start;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      resultArr.push(start);
    } else {
      startValue = calculateSum(startValue);
      resultArr.push(startValue)
    }
  }
  return resultArr;
}


Testing
it produces the expected outputs!
But I made a mistake declaring startValue end of the for loop, which results the [3,6,6,6] instead of [3,6,21,231]
so declared variable first in the function and then it worked normally.

*/


// model answer
// looks like they solved it in really easy way :/
// did not have to divide the number to array Ew 

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
}

function summationSequence(start, length) {
  let seq = [start];

  for (let i = seq.length; i < length; i++) {
      seq.push(summation(seq[seq.length - 1]));
  }
  return seq;
}