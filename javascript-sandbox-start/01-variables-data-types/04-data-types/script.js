// null: intentional absence of any object value

let emptyValue = null;

console.log(emptyValue); // Output: null

// Undefined: a variable that has been declared but not assigned a value
let uninitializedValue;
console.log(uninitializedValue); // Output: undefined
// Symbol: a unique and immutable primitive value, often used as object property keys. Build-in object whose constructor returns a unique symbol
let uniqueSymbol = Symbol('description');
console.log(uniqueSymbol); // Output: Symbol(description)

// BigInt: a numeric value that can represent integers with arbitrary precision. It is created by appending 'n' to the end of an integer literal or using the BigInt() constructor
let bigIntValue = BigInt(1234567890123456789012345678901234567890);
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n
// Example of using BigInt for large integers
let largeNumber = BigInt(1234567890123456789012345678901234567890);
let anotherLargeNumber = BigInt(9876543210987654321098765432109876543210);
let sum = largeNumber + anotherLargeNumber;
console.log(sum); // Output: 11111111101111111110111111111011111111000n

// Reference Types
// Reference types are complex data types that can hold collections of values and more complex entities. They include objects, arrays, functions, and dates.
// Objects: a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type
let person = {
  name: 'John',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'gaming'],
  address: {
    city: 'New York',
    zipCode: '10001'
  }
};
console.log(person); // Output: { name: 'John', age: 30, isStudent: false, hobbies: [ 'reading', 'gaming' ], address: { city: 'New York', zipCode: '10001' } }
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
console.log(person.hobbies[0]); // Output: reading
console.log(person.address.city); // Output: New York

// Arrays: a special type of object used to store ordered collections of values. They can hold elements of any type, including other arrays and objects

//Javascript is a dynamically typed language, meaning that variables can hold values of any type and can  types at runtime. 
// This flexibility allows for rapid development and prototyping, but it also requires careful handling of types to avoid unexpected behavior. Understanding the different data types in JavaScript is crucial for effective programming and debugging.

//Strings: using const to declare a string variable
const firstName = "Meerim Suluu";

// Number:
const age = 33; 
const heght = 1.65;

// Boolean:
const hasKid = true

//Null:
const aptNumber = null;
// Undefined:
let score;

//symbol
const id = Symbol('id');

//reference types: 
const numbers = [1, 2, 3, 4, 5]

function sayHallo () {
  console.log("Hello");
}

const Output = sayHallo;
console.log(Output, typeof Output); // Output: Meerim Suluu string





