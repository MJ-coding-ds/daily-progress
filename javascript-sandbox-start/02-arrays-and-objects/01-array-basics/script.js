let x;
//Array Literal
const numbers = [100, 202, 303, 404, 505];

// Array Constructor
const fruits = new Array("apple", "banana", "orange");

const mixedArray = [100, "apple", true, null, undefined, { name: "John" }];

x = numbers[0]; 

x = numbers[0] + numbers[1]; // 100 + 202 = 302

x = "My favorite fruit is " + fruits[0]; 

x = numbers.length; 

fruits[2] = "kiwi"; 

x = fruits// Change the first element of the fruits array

fruits[3] = "mango";
x = fruits; // Change the last element of the fruits array
fruits[fruits.length] = "grape"; // Change the last element of the fruits array
x = fruits; // Change the last element of the fruits array

console.log(x);
