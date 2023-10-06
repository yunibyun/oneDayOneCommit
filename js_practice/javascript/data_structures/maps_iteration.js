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


const question = new Map([
  ['question', 'What is the best programming language in the world?']
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

/*
Map(7) {
  'question' => 'What is the best programming language in the world?',
  1 => 'C',
  2 => 'Java',
  3 => 'Javascript',
  'correct' => 3,
  true => 'Correct!',
  false => 'Try again!'
}
*/

// Convert object to maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/*
Map(3) {
  'thu' => { open: 12, close: 22 },
  'fri' => { open: 11, close: 23 },
  'sat' => { open: 0, close: 24 }
}
*/


// iteration
// Since maps are also iterables, we can iterate them using for..of loop
// If it's object, we need object.entries() instead of question
// Because objects are not iterable so we need to convert them first to iterate (using .entries)

console.log(question.get('question'));
// What is the best programming language in the world?
for (const [key, value] of question) {
   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));

question.get(question.get('correct') === answer);


// convert a map to an array
console.log([...question]);
/*
[
  [ 'question', 'What is the best programming language in the world?' ],
  [ 1, 'C' ],
  [ 2, 'Java' ],
  [ 3, 'Javascript' ],
  [ 'correct', 3 ],
  [ true, 'Correct!' ],
  [ false, 'Try again!' ]
]
*/

console.log(question.entries());
/*
[Map Entries] {
  [ 'question', 'What is the best programming language in the world?' ],
  [ 1, 'C' ],
  [ 2, 'Java' ],
  [ 3, 'Javascript' ],
  [ 'correct', 3 ],
  [ true, 'Correct!' ],
  [ false, 'Try again!' ]
}
*/

console.log(question.keys());
// [Map Iterator] { 'question', 1, 2, 3, 'correct', true, false }

console.log(question.values());
/*
[Map Iterator] {
  'What is the best programming language in the world?',
  'C',
  'Java',
  'Javascript',
  3,
  'Correct!',
  'Try again!'
}
*/

console.log(...question.keys());
// question 1 2 3 correct true false
console.log(...question.values());
// What is the best programming language in the world? C Java Javascript 3 Correct! Try again!

