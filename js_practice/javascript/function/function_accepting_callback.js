'use strict';

const bookings = [];

// setting default parameter 
// Default value can contain any expression
const createBooking = function(
  flightNum, 
  numPassengers = 1, 
  price = 199 * numPassengers 
  ) {

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  bookings.push(booking);
}

