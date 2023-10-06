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


// A map is a data structure that we can use to map values to keys.
// Like objects, data is stored in key-value pairs in maps.

// Then what would be difference between maps and objects?
// In maps, the keys can have any type
// For instance, in objects, keys are basically always be strings.
// But in maps, we can have any type of key, such as objects, arrays, or even other maps.

 // To create a map
 const rest = new Map();

 // To fill up the map
 // key, value
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// Calling the set method like this does not only update the map that's called on, but it also returns the map.
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));
/*
Map(3) {
  'name' => 'Classico Italiano',
  1 => 'Firenze, Italy',
  2 => 'Lisbon, Portugal'
}
*/

// Chaining the set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// To read data from a map
// .get('name of the key')
console.log(rest.get('name'));
// 'Classico Italiano'
console.log(rest.get(true));
// We are open :D
console.log(rest.get(1));
// Firenze, Italy

const time = 21;
// Clever, but so unreadable so don't use like this too often
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// We are open :D

// To check if a map contains a certain key,
// We use .has(key) method
console.log(rest.has('categories'));
// true

// To delete an element from a map,
// We use .delete(key)
rest.delete(2);

// Maps also have .size method
console.log(rest.size); // 7

// to remove all elements from the maps
// we use .clear
// rest.clear();


// Usage of array or object as a map key
rest.set([1,2], 'Test');
console.log(rest);
/*
Map(8) {
  'name' => 'Classico Italiano',
  1 => 'Firenze, Italy',
  'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
  'open' => 11,
  'close' => 23,
  true => 'We are open:D',
  false => 'We are closed :(',
  [ 1, 2 ] => 'Test'
}
*/

// Then how to get the data based on that array?
console.log(rest.get([1,2])); // undefined
// Why it does not work?
// Because the [1, 2] and the key of the rest [1, 2] are not the same object
// They are NOT same object in the heap


// In order to make it work,  create an array like
// const arr = [1, 2];
// and then rest.set(arr, 'Test');
// console.log(rest.get(arr)); 
// Because then it refers to the same place in memory
// also works something like this...
// rest.set(document, querySelector('h1'), 'Heading');
