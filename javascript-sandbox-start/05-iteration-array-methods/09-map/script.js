// Array.map 
const numbers = [1, 2, 3, 4, 5]; 
const doubleNumbers = numbers.map((number)=> number * 2); 
console.log(doubleNumbers);

//Same with ForEach. 

const doubleNumbers2 = []; 
numbers.forEach((number) => {
    doubleNumbers2.push(number *2);
}); 
console.log(doubleNumbers2);