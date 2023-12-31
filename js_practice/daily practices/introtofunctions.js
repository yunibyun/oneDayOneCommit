
//functions

/* The definition of functions in Javascript
A function is a set of code that will run when it is called 

A function definition of the function keyword
1. The name of the function
2. A list of parameters to the function, enclosed in parentheses ()
3. The code to be run when the function is run, enclosed in curly brackets {}. */

/*function declaration
A function declaration is when a function is defined and saved so that we can use it 
or re-use it later. When we use a declared function, we are 'calling' the function, which is
also known as 'invoking' the function. 
A function call === a function invocation */


// example one

function average (number1, number2) {
    return (number1 + number2) / 2 ;
}

// the parameters for the average function: number1 and number2

average (10,16); //returns 13
// this function call passes the argument 10 and 16.

console.log ("First!");

function callMe() {
    console.log("Second!");
    console.log("Third!");
}


console.log ("Fourth!");

// Javascript will only execute the code inside of the definition only when the function is invoked.
// the code above will print only "First", followed by "Fourth!";



function sayHello() {
    console.log("Hello, second!");
    console.log("Hello, third!");
}

console.log("Hello, first!");
sayHello();
console.log("Hello, fourth!");


//Running this will print these statements in this order;
// Hello, first!
// Hello, second!
// Hello, third!
// Hello, fourth!


function countNumbers() {
    console.log ("two");
    console.log ("three"); 
}

console.log("one");
console.log("four");
countNumbers();

// Running this will print these statements in this order;
// one
// two
// three
// four


/* Returning a value
Every function in Javascript returns undefined unless otherwise specified */

function sayNumber (number) {
    console.log(number);
}

sayNumber(2); // prints 2 and returns undefined

// the function ends without encountering a return statement, so it returns undefined.

function sayNumberAgain (number) {
    console.log(number);
    return true;
}

sayNumberAgain(2);
// prints 2 and returns true

function calculateAverage (number1, number2) {
    return (number1 + number2) / 2;
}

let result = average (10, 16);
console.log(result);
console.log(average(6,64));

// The return statement is that it stops function execution immediately!, 
// This means that any code after return will not be executed!

function calculateAverageAgain(number1, number2) {
    let sum = number1 + number2;   
    return sum;
    // Anything under the return statement will not be executed!  
    console.log("This won't be printed!");
    return false;
}

calculateAverageAgain(19,43); // returns 62

/* naming
We always name our function and variables with calmelCase for multiple words.
e.g.) tipCalculator, currentNumber, puppyPartyFinder */

/* difference between parameters and arguments
Paramenters are comma seperated variables specified as part of a function definition.
Arguments are values passed to the function when it's invoked. */

function add(firstParamenter, secondParameter) {
    console.log(firstParameter + secondParameter);
}

// the add function declares two parameters: firstParameter and secondParameter 
 add (1, 2); // =>3

/* extra arguments
In Javascript a function will not throw an error if the number of arguments
passed during a function invocation is different than the number of parameters
listed during function declaration. */

function addAgain (firstParameter, secondParameter) {
    console.log(firstParameter + secondParameter);
}

// this will ignore the extra arguments
// the first two arguments passed in will be assigned to the first two parameters
add(1, 2, 17, 14); // => 3


//* Not enough arguments
function addTheParameters (firstParamenter, secondParameter) {
    console.log(firstParamenter + secondParameter);
}

add(5) // => NaN

/* 
1. firstParameter was set to equal to the first passed in argument which in the above case, 5
2. Since there is no second argument, secondParameter is set to undefined.
3. The function then tries to add 5 to undefined, So we get NaN (which means Not a Number) printed to the console */


function addThreeNumbers (num1, num2, num3) {
    return num1 + num2 + num3;
}

addThreeNumbers (1,2,3,4); // 6
addThreeNumbers (1,2); // NaN

/* 
Write a function goodbye(name) that takes in a string name and 
returns a string saying "bye" to that name. 
*/

function goodbye (name) {
    return `bye, ${name}!`;
}

console.log (goodbye("Felicia")); // bye, Felicia!
console.log (goodbye("Billy")); // bye, Billy!


/* Practice typing the syntax for functions. 
Write functions with different messages and console log them. */

function sayHelloAgain(name) {
    let msg = `Hello, ${name}!. How are you today?`;
    return msg;
}

console.log(sayHelloAgain("World"));


function calculateAverageNumber (num1, num2, num3) {
    let calculatedAverage = (num1 + num2 + num3) / 3;
    return calculatedAverage;
}

console.log (calculateAverageNumber(5,14,83));

function plusFive (num) {
    return num + 5;
}

console.log(plusFive(5));


function isCool(string) {
    let coolSentence   = `${string} is cool!`;
    console.log(coolSentence);
    return coolSentence;
}

console.log(isCool("Javascript"));


