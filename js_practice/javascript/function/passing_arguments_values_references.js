'use strict';

const flight = 'LH234';
const yuna = {
  name: 'Yuna Byun',
  passport: 1234567890
}

const checkIn = function (flightNum, passenger) {
  // Normally should not change the parameters of the function!
  flightNum = 'LH999';
  // As we pass it the yuna object into the checkIn function where it's called passenger,
  // so as we are manipulating the passenger object,
  // we are actually manipulating the yuna object too. 
  // because they both are the same object in the memory heap. 
  passenger.name = 'Ms. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in')
  } else {
    alert('Wrong passport number!')
  }
}

checkIn(flight, yuna);
// flight is a primitive type (string)
// As we passed the value into the function, then the flight number in the function is 
// just a copy of the original value 
// (The flightNum contains a copy, and not the original value of the flight variable)
console.log(flight); // LH234

// When we pass a reference type to a function,
// What is copied is really just a reference to the object in the memory heap
// e.g. const passenger = yuna;
// when we try to copy the object like the obove,
// we are really only copying the reference to that object in the memory heap
// but they both point to the same object in memory.
console.log(yuna); // { name: 'Ms. Yuna Byun', passport: 1234567890 }


// passing a primitive type to a function 
// -> just the same as creating a copy

// passing an object (reference type) to a function
// whenever we change the copy, also we manipulates the original reference type value 
// this can make unforseeable consequences in large code bases!

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(yuna);
console.log(yuna.passport); // some random number


// Passing by value, passing by reference
// JS only has passing by value!
// So in Js, when we pass a reference to a function, but we do NOT pass by reference 
