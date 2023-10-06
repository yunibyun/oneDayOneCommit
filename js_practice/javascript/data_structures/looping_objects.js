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

// property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// ['thu', 'fri', 'sat'];

console.log(`We are open on ${properties.length} days`);
// We are open on 3 days

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day}, `
}

console.log(openStr); 
// We are open on 3 days: thu, fri, sat,

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// thu, fri, sat


// Property VALUES
const values = Object.values(openingHours);
console.log(values);
/*
[
  { open: 12, close: 22 },
  { open: 11, close: 23 },
  { open: 0, close: 24 }
]
*/

// Entire object
const entries = Object.entries(openingHours);
/*
[
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]
*/

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On sat we open at 0 and close at 24
*/