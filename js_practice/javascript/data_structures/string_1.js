'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// To get a character at a certain position
// we can use string[position] like array
console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

// Also can do directrly on the string
console.log('B737'[0]); // B

// We can also use 'length' method for string as well
console.log(airline.length); //16
// Or directly on the string
console.log('B737'.length); // 4


// Methods
// indexOf
// gets a position of a certain letter of a string
console.log(airline.indexOf('r')); // 6
// We can also search for entire words (case-sensitive)
console.log(airline.indexOf('Portugal')); // 8
// lastIndexOf
// gets a position of a certain letter of a string, searching from last character
console.log(airline.lastIndexOf('r')); // 10


// But for what do we use those index methods? Why are they useful?
// e.g.) extract part of a string using the slice method,
// since the slice method needs indexes as arguments

// slice(begin parameter,end parameter (default-length))
// the end index is NOT inclusive, but exclusive!
// The result we get from slice method is substring
// Substring is a subset or part of another string
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal


console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :P');
  else console.log('You got lucky :D');
}

checkMiddleSeat('11B'); // You got the middle seat :P
checkMiddleSeat('23C'); // You got lucky :D
checkMiddleSeat('3E'); // You got the middle seat :P

// Why there are methods for strings, though strings are primitive types?
// Whenever we call a method on a string, JS automatically convert that string primitive to a string object with the same content
// And then it's on that object where are methods are called 
// this process is called boxing because it takes our string and puts it into a box, which is the object
// When the operation is done, the object is converted back to a regular string primitive
// All string methods return primitives even if called on a string object 

// toLowerCase
// returns lowercased string

// toUpperCase
// returns uppercased string

// Fix capitalisation in name
const passenger = 'yUNa'; 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Yuna

const correctingName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect = passengerLower[0].toUppercase() + passengerLower.slice(1);
  return passengerCorrect;
}

// Comparing email
const email = 'hello@yuna.io';
const loginEmail = ' Hello@Yuna.Io \n';


const lowerCasedEmail = loginEmail.toLowerCase();
// delete white spaces
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@yuna.io

// within one step
const lowerEmail = loginEmail.toLowerCase().trim();
// hello@yuna.io

const checkingEmail = function (email) {
  const normalisedEmail = email.toLowerCase().trim();
  if (email === normalizedEmail) return true;
  else return false;
}

// from ES2019 also there are trimStart() and trimEnd();
// trimStart() only deletes white spaces at front
// trimEnd() only deletes white spaces at the end

// replacing, it only replaces the first one 
const priceGB = '288,97£'
// 
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.98$

const announcement = 'All passengers come bo boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// 'All passengers come bo boarding gate 23. Boarding door 23!';
// The first one replaced as 'gate' but the second one not.

// replaceAll 
console.log(announcement.replaceAll('door', 'gate'));
// 'All passengers come bo boarding gate 23. Boarding gate 23!'

// using regular expression
console.log(announcement.replace(/door/g, 'gate'));
// 'All passengers come bo boarding gate 23. Boarding gate 23!'


// Booleans
const plane2 = 'A320neo';

// includes()
// return true if the string includes the substring
// false if not
console.log(plane2.includes('A320')); // true
console.log('Boeing'); // false

// startsWith()
// return true if the string starts with the substring
// false if not 
console.log(plane2.startsWith('Air')); // false
console.log(plane2.startsWith('A3')); // true

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family');
} // nothing logs on console.


// Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
// You are NOT allowed on board
checkBaggage('Socks and camera');
// Welcome aboard!
checkBaggage('Got some snacks and a gun for protection.');
// You are NOT allowed on board


// split()
// allows split string into multiple parts based on divider string
console.log('a+very+nice+string'.split('+')); // [ "a", "very", "nice", "string" ]
console.log('Yuna Byun').split(' '); // ['Yuna', 'Byun];
const [firstName, lastName] = 'Yuna Byun'.split(' ');
// firstName = 'Yuna', lastName = 'Byun'

// join()
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Ms. Yuna BYUN


const capitalizedName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];

  for(const word of names) {
    namesUpper.push(word[0].toUppercase() + word.slice(1));
  }
  console.log(namesUpper.join(' '));
}

// OR

const capitalisedName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];

  for (const word of names) {
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

const passenger1 = 'jessica ann smith davis';
capitalizedName(passenger1); // 'Jessica Ann Smith Davis'
capitalizedName('yuna byun'); // 'Yuna Byun'


// Padding a string
// add a number of characters to the string
// until the string has a certain desired length

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
// +++++++++++Go to gate 23!
console.log('yuna'.padStart(23, '+'));
// +++++++++++++++++++yuna

console.log(message.padEnd(25, '!'));
// Go to gate 23!!!!!!!!!!!!
console.log('yuna'.padEnd(23, '!'));
// yuna!!!!!!!!!!!!!!!!!!!

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4337846386464738));
// ************4738


// Repeat
// repeat same strings multiple times

const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));
// Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...Bad weather... All Departures Delayed...


