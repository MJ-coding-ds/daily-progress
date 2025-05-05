// Arrow Functions 

//function add(a, b) {
  //  return a + b;
//}
//console.log(add(2, 3)); // 5


//regular arrow function syntax 
const add = (a, b) => {
    return a + b;
};

//shorter arrow function syntax: Implicit return
const substract  = (a, b) => a - b;

const double = a => a * 2;

//Returning an object
const createObj = () => ({
    name: 'Meerim',
    age: 25,
});
// Number 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
    console.log(n);
}); 
// shorter arrow function syntax
numbers.forEach(n => console.log(n));


console.log(add(2, 3)); // 5
console.log(substract(2, 3)); 
console.log(double(2)); // 4
console.log(createObj()); // { name: 'Meerim', age: 25 }

