//Values are stored in stack 
const name = 'John'; 
const age = 30;

//Reference types are stored in heap
const person = {
    name: 'Brad',
    age: 40,
};
let newName = name;
newName = 'Jane'; // This will not change the original name variable
let newPerson = person;
newPerson.name = 'Sara'; // This will change the original person object

console.log(name, newName);
console.log(person, newPerson);

