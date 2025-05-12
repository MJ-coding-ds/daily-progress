const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//Long version: 
// const evenNumbers = numbers.filter(function(number){
//     return number % 2 === 0;
// }); 
// console.log(evenNumbers);

//Short version for Filter 
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); 

//Same with ForEach: 
const evenNumbers = []; 
numbers.forEach((number) => {
    if(number % 2 === 0){
        evenNumbers.push(number);
    }
});
console.log(evenNumbers);