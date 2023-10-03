/* 
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

function greet(name){
  //your code here
    const greetingSentence = `Hello, ${name} how are you doing today?`
    return greetingSentence;
}

console.log(greet("Yuna"));


/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

/* 
examples (operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/


//change the function to the Switch statement;
function basicOp(operation, value1, value2)
{
    if (operation === '+') {
    return value1 + value2;
    } else if (operation === '-') {
    return value1 - value2;
    } else if (operation === '*') {
    return value1 * value2;
    } else if (operation === '/') {
    return value1 / value2;
    } 
}

console.log(basicOp('*', 13, 14));


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
    if (number % 2 === 0) {
    return number * 8 ;
    } else {
    return number * 9;
    }
}

// The remainder operator % gives the remainder when used with a number
// Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    if ( bool === true ) {
    return "Yes";
    } else {
    return "No";
    }
}

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
/*
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

function digitize(n) {
  //code here
    const numberArray = Array.from(String(n), Number);
    return numberArray.reverse();
}


/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

const smash = (arr) => {
  return arr.join(' ');
}

/*
Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

// 이걸 더 줄여서
/*
findSmallestInt (args) {
    return args.sort((a, b) => a-b)[0];
}
으로 만들수도 있음 
*/

findSmallestInt(args) {
  args.sort((a, b) => a - b);
  return args[0];
}



// 다른 사람 답안
findSmallestInt(args) {
  return Math.min(...args)
}