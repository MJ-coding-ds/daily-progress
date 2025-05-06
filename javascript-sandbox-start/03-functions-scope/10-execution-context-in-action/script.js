//Execution Context 
// Memory: this is the variable environemnt that stores all of your varibales and functions as key.value üairs in memory
////- 
// Execution code: this is thread of exectuions. Each line of code is executed line by line

let x =100 // x variablw is allocated memory and stores "undefined"
let y = 50 // yvariable is allocated memory and stores "undefined"

// getSum() function is allocated memory and stores all the code 
function getSum(n1, n2) { 
    let sum = n1 +n2;
    return sum 
}
//sum1 varibale is allocated memory and stores all the code. 
let sum1=getSum(x,y) 
// sum2 varibale is allocated memory and stores "undefined"
let sum2 = getSum(10,5)

console.log(sum1, sum2);