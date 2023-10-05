'use strict';
/*
Destructuring is an ES6 feature and it's a way of unpacking values
from an array or an object into separate variables. 
Destructuring is to break a complex data structure down 
into a smaller data structure like a variable.
*/

// without destructuring
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2]; */

// with destructuring we can declare all three variables at the same time
// it looks like an array, but it's not but it's a destructuring assignment.
// whenever javascript the square bracket on the left side and the equal sign, it knows it should do destructuring.
// it is also declaring the variables using const
const [x, y, z] = arr;
console.log(x, y, z);
// 2, 3, 4
console.log(arr); // [2, 3, 4]


// let's take some elements out of our categories
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  }
};

//this one just takes first and second one, simply follow the order of elements of categories
// const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzaria

// But what if we want to only the first one and the third one from the categories?
// skip the unwanted element using comma , ,
const [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// Let us assume that the owner of the restaurant wants to switch the main and the secondary category
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

// without destructuring we would do like in this way

// Switching variables
/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian 
 */

// with destructuring we can do like this
// now we don't need temporary variable
[main, secondary] = [secondary, main] 
console.log(main, secondary);
// Vegetarian Italian


/*
Another trick with destructuring is that we can have a function,
return an array and then we can immediately destruct the result into different variables.
*/

// writing a function to order food

console.log(restaurant.order (2, 0));
// ["Garlic Bread", "Pizza"]

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// Garlic Bread Pizza

// What happens if we have a nested Array?
/* 
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
console.log(i, j); // 2 [5, 6]
 */
// What if we need all the individual value, not as an array?
// then desturcturing inside of the destructuring

// Nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);
//  2 5 6

// we can also set default values for the variables when we are extracting them
// that could be useful when we don't know the length of the array
// e.g. when we get data from an API


// Default values
/* const [p, q, r] = [8, 9];
console.log(p, q, r);
// 8 9 undefined */

// Setting Default values
const [p = 1 ,q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//  8 9 1
  

