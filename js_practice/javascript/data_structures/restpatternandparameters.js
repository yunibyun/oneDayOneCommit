'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order : function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}!`)
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// rest pattern uses the same syntax like the spread operator but does the opposite of the spread operator
// rest pattern is used to collect multiple elements and condense them into an array. In other words, the rest operator packs elements into an array.


// 1. Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

// the rest operator does not include any skipped elements
// rest element must be the last element, and there can be only one rest element in any destructuring assignment
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// 2. Functions
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
}

add(2, 3); // 3

const x = [23, 5, 7];
add(...x); // 35

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// "mushrooms"
// ["onion", "olives", "spinach"]

restaurant.orderPizza('pepperoni');
// "pepperoni"
// []

