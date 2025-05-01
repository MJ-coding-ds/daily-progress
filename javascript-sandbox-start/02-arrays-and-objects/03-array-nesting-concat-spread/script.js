let x;
const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];
//fruits.push(berries);
//x =fruits[3][1];
 const allFruits = [fruits, berries];
x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (... )

x = [...fruits, ...berries];

//Flattening an array
const arr = [1, 2, 3, [4, 5, 6], [7, 8]];
x = arr.flat();

//Static method on object Array.isArray(fruits); 
x = Array.isArray(fruits);
x = Array.from('1,2,3,4,5'); // converts a string to an array

const a = 1; 
const b = 2;
const c = 3;
 x = Array.of (a, b, c); // creates an array from the arguments passed
console.log(x); 