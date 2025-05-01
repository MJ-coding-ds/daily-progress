let x,y; 
x = Math.random ()*100 +1;
y = Math.random ()*50 +1;

console.log(x);
console.log(y);

// Sum:
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

//Diffrence: 
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);
//Product:
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

//Quotient:
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

//Reminder:
const reminder = x % y;
const reminderOutput = `${x} % ${y} = ${reminder}`;
console.log(reminderOutput);
