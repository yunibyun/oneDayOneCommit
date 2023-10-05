'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


// Set -> collection of the unique values

// creating a new set
// new Set(iterables)
const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);

console.log(ordersSet);
// Set(3) { 'Pasta', 'Pizza', 'Risotto' }
// All the duplicates are gone
// Sets are also iterables

console.log(new Set('Yuna'));
// Set(4) { 'Y', 'u', 'n', 'a' }

console.log(ordersSet.size);
// 3

// If certain element is in the set?
// similar to .includes() in array
console.log(ordersSet.has('Pizza'));
// true
console.log(ordersSet.has('Bread'));
// false

// add new elements on the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }

// delete element from the set
ordersSet.delete('Risotto');
// Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

// retrieve values out of a set?
// There are no way of getting values out of a set,
// because all values in set are unique and their order doesn't matter,
// there is no point to retrieve values out of a set.
// all we need to know is whether a certain value exists in the set or not (and we have 'has'method for this
// If we need to retrieve value? then just use an array

// delete all of the elements of the set
//  ordersSet.clear();
// Set(0) {}


// Sets are also iterables
// So, we can loop over them as well. (with for...of..)
for (const order of ordersSet) console.log(order);
// Pasta
// Pizza
// Garlic Bread

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staff);
// Set(3) { 'Waiter', 'Chef', 'Manager' }

// Conversion from set to an array
// spread operator works for iterables,
// Sets are iterables for it will also work like this
const staffUnique2 = [...new Set(staff)];
// [ 'Waiter', 'Chef', 'Manager' ]

// How many different positions in the restaurant?
// We can calculate it with .size
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// 3

// How many different letters a string contains?
console.log(new Set('Yunabyun').size);
// 6

// Sets are not intended to replace arrays at all.