'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function(movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ....

