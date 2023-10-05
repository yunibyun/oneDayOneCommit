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
  }
};

restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via del Sole, 21',
  main: 2,
  starterIndex: 2,
})
// Order received! Garlic Bread and Pizza will be delivered to Via del Sole, 21 at 22:30.

restaurant.orderDelivery ({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})
//Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00.

// Object destructuring
// We use curly braces to destructure objects

// In object the order of elements does not matter, so we don't need to manually skip elements like we've done in array destructuring.
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
/*
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
*/

/*
This would be very useful especially when we deal with the result of an API call
which basically means get data from another web application like weather data or data about movies
and those data usually comes in the form of objects 
and then the destructuring will be super useful, since it allows us to write a lot less code
*/

// But what if we want the variable names to be different from property names?
// property: specify a new name what I want
const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
/*
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
*/


// default values
// without default value we get undefined from menu while printing it
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
// [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]


// mutating variables while destructuring objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// we get syntax error 
// because when we start a line with a curly braces like this then JS expects a code block 
// and we cannot assign anything to a code block with equal sign, therefore unexpected token '='
// {a, b} = obj;
// to solve this, wrap everything with parenthesis

({a, b} = obj);
console.log(a, b); // 23, 7

// nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c); // 11, 23

