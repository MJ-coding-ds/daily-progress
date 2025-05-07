// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

if (true){
    console.log('This is true');
}

if (false){
    console.log('This is not true');
}

const x = 10; 
const y = 5;

if (x>=y) {
    console.log(`${x} is greater than ${y} `);
}

if (x===y) {
    console.log(`${x} is equal to ${y} `);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

//"if" has own scope 

if (x !==y) {
    const z =20;
    console.log (`${z} is 20`);
}
console.log(z);