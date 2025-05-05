// Declaration versus Expression

// Function Declaration
function addDollarSign (value) {
  return '$' + value
}
console.log(addDollarSign(100)) // $5
// Function Declaration: hoisted--> you can call the function before its definition in the code
//Name is required
//Stored in memory at compile time. 
//Use function declarations for top-level, reusable functions. 





//Function Expression
const addDollarSign2 = function (value) {
    return '$' + value
 };
console.log(addDollarSign2(200)) // $5
//Function Expression: not hoisted--> you can only call the function after its definition in the code
//Can be anonymous or no name 
// only available after the line it is defined. 
//Use function expressions for short-lived functions, 
// or when you need to pass a function as an argument.
// need more flexibility, want to define inline behaviour, are usinf arrow functions. 
