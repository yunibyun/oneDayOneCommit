'use strict';

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}


// Higher Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`)
}

transformer('Javascript is the most messy language in the world!', upperFirstWord);

/*
"Original string: Javascript is the most messy language in the world!"
"Transformed string: JAVASCRIPT is the most messy language in the world!"
"Transformed by: upperFirstWord"
*/ 


transformer('Javascript is the most messy language in the world!', oneWord);
/*
"Original string: Javascript is the most messy language in the world!"
"Transformed string: javascriptisthemostmessylanguageintheworld!"
"Transformed by: oneWord"
*/ 


// Js uses callbacks all the time
const high5 = function () {
  console.log('🙋🏻‍♀️');
}
['Yuna', 'Jin', 'Eunji'].forEach(high5);

// 🙋🏻‍♀️ 🙋🏻‍♀️ 🙋🏻‍♀️


// Why callback functions are so much used in JS?
// Why they are so helpful?
// Callback functions makes it easy to split up or code into more reusable and interconnected parts.
// Callback function allows to create abstraction
