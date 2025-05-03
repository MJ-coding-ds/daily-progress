const firstName = 'Meerim';
const lastName = 'Jeembaeva';
const age = 30;
const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age); 

// Destructurin: a feature that allows unpacking values from arrays or properties from objects into distinct variables.

const todo = {
    id:1,
    title: 'Learn quickly JavaScript', 
    user: {
        name: 'Meerim'
    }
     }; 
     const  { 
        id: todoId, // renaming
        title,
        user: { name }, // destructuring
     } = todo; 

     console.log(todoId);
     console.log(name);


// Destructuring arrays
const numbers = [12, 34, 56, 78, 90];

const [fisrt, second, third, ...rest] = numbers; // destructuring
console.log(fisrt, rest); // rest operator
console.log(second, third);


