
/*
Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

/*
Problem
we are given a string with dashes among the words 
and want to return the String without dash, and after dash camelcased.

Example
Input 
"background-color"
Output
"backgroundColor"

Input 2
"list-style-image"
Output 2
"listStyleImage"

Input 3
"-webkit-transition"
Output 3
"WebkitTransition"

Data
We'll working with a string.

Algorithm
1. First, I have to split each characters up and store them in an array.

2. Write for loop in order to find the dash
  2.1 if arr[i] = "-", then arr[i + 1].toupperCase
  2.2 splice(i, 1)? Last time when I tried to splice a specific element it showed some weird behaviour
      maybe it's because I didn't really provide valid second argument.
      So I will provide splice(i, 1) (just delete the one element)

3. Join the array and return it

Code
Pseudo
func camelize str
  arr = str.split("")

  for 
    if arr[i] = "-" 
      arr[i+1].toUppercase()
      arr.splice(i, 1);
  return arr.join("")

  Testing
  it produces the expected outputs!
*/
const camelize = (str) => {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" ){
      arr[i + 1].toUpperCase();
      arr.splice(i, 1);
    }
  }
  return arr.join("");
}

/*
Filter range
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/


/*
Problem
We are given an array and a range (from startvalue a to inclusive end value)
and want to return a new array with values higher/equal to start and lower/equal to end
We should not mutate the original array

Example
Input array [5, 3, 8, 1] range 1,4
Output [3, 1]

Data
We will working on array.

Algorithms
1. We have to declare a new empty array
2. Have to find elements which are bigger(or equal to) start,
   and less than (or equal to) end. Therefore write a loop to do this
  2.1 write an if statement to check the condition  
  2.1 push elements into the array if condition met
3. return the array

Code

Pseudocode
filterRange function arr a b
  resultArr

  for
    if 
      resultArr.push(arr[i])

  return resultArr

  Testing
  It produces the expected output!
  */


  const filterRange = (arr, a, b) => {
    const resultArr = [];
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] >= a && arr[i] <= b) {
        resultArr.push(arr[i]);
      }
    }
  
    return resultArr;
  }

  const filterRange = (arr, a, b) => {
    return arr.filter((element) => element >= a && element <= b);
  }
  
  console.log(filterRange([5, 3, 8, 1], 1, 4));

  // maybe I need to do practice to convert them into filter and map...

  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
};

 /* 1. Create one player array for each team 
 (variables 'players1' and 'players2') */
const [players1, players2] = game.players;

 /* 2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */

const [gk, ...fieldPlayers] = players1 

/* Create an array 'allPlayers' containing all players of both teams (22
players */

const allPlayers = [...players1, ...players2];

/* 
During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
*/

const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];

/* 5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') */

const {odds: {team1, x: draw, team2}} = game;

/* 
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/

const printGoals = (...players) => {
  console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/*
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
*/

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

