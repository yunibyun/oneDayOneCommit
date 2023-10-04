'use strict';

// We can use spread operator to expand an array into all its elements
// In other words, unpacking all the array elements at one

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

// using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // [ 1, 2, 7, 8, 9 ]
console.log(...newArr); // 1, 2, 7, 8, 9

// What the spread operator does is to take all the values out of this arr and write them induvidually as if we wrote 7, 8, 9 manually.
// whenever we need the elements of an array indivudually we use spread operator.
// That is useful when we write an array and when we need to pass multiple elements into a function.

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
};


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]


// spread operator vs destructuring
// spread operator takes all elements from the array and it does not create new variables.
// as a consequence, we can only use it in places where we write values seperated by commas.

// create shallow copy of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// merge two arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
/* [
  'Focaccia',
  'Bruschetta',
  'Garlic Bread',
  'Caprese Salad',
  'Pizza',
  'Pasta',
  'Risotto'
]
*/


// spread operator works all sorts of iterable, too!
// iterables - things like all arrays, maps, strings, or sets but NOT objects.
const str = 'Yuna'
const letters = [...str, ' ', 'S.'];
// [ 'Y', 'u', 'n', 'a', ' ', 'S.' ]

// We can only use the spread operator when building an array or when we pass values into a function.
console.log(...str); // Y u n a

// What we can't do: use spread operator to build a string using a template literal.
// this will not work
// console.log(`${...str} Byun`); // Unexpected token

const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Let\'s make pasta! Ingredient 2?'), 
  prompt('Let\'s make pasta! Ingredient 3?') 
];
console.log(ingredients); 

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// since ES2018 the spread operator also works with objects, though objects are not iterables.
// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Gordon'};
/* 
{
  foundedIn: 1998,
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
  starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
  mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
  },
  order: [Function: order],
  orderDelivery: [Function: orderDelivery],
  orderPasta: [Function: orderPasta],
  founder: 'Gordon'
}
*/

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Rome';
console.log(restaurantCopy.name); // Ristorante Rome
console.log(restaurant.name); // Classico Italiano