'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  // enhanced object literals
  // same like book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} 
      flight ${this.code}${flightNum}`
      );
      this.bookings.push({ flight: `${this.code}
      ${flightNum}`, name }); 
  },
};



lufthansa.book(239, 'Arya Stark');
// Arya Stark booked a seat on Lufthansa flight LH239
lufthansa.book(564, 'John Snow');
// John Snow booked a seat on Lufthansa flight LH564


const eurowings = {
  name: 'Eurowings',
  code: 'EW',
  bookings: [],

}

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
// "Sarah Williams booked a seat on eurowings flight EW23"

book.call(lufthansa, 239, 'Mary Cooper');
// "Mary Cooper booked a seat on Lufthansa flight LH239"


// Apply method
// apply does not receive a list of arguments after the this keyword
// but instead, it will take an array of the arguments

const flightData = [583, 'George Cooper'];
console.log(book.apply(eurowings, flightData));
// "George Cooper booked a seat on eurowings flight EW583"

book.call(eurowings, ...flightData);

