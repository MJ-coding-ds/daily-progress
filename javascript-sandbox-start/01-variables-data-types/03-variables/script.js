// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase


let firstName = 'Meerim'; 
let lastname = 'Jeembaeva';

console.log(firstName, lastname);

var age = 33; 
console.log(age);

let name_1 = 'Sasha'; // Invalid variable name
console.log(name_1);


// Reassigning variables
age = 35; 
console .log(age);

let score; 

score = 1; 
console.log(score);

if (true) {
    score = score +100;
}
console.log(score);


// declare and not intiliaze
 

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr);

const person = {
    name: 'John',
    age: 30
};
person.name = 'Doe'; // Allowed
person.email = 'doe@example.com'; // Allowed
console.log(person);

//declare multiple variables
let a, b, c; 
const d=10, e=20; f=30; 
console.log(d); 
//
// console.log(a):
