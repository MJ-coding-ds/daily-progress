//Block scope 
const x = 100;

if(true) {
    const y = 200;
    console.log(x + y); 
}

///console.log(x + y); // ReferenceError: y is not defined
// The variable y is not accessible outside the block where it was declared
// The variable x is accessible outside the block where it was declared
// The variable x is declared with const, so it cannot be reassigned
// The variable y is declared with const, so it cannot be reassigned


for (let i = 0; i<=10; i++){
    console.log(i);
}
///console.log(i); // ReferenceError: i is not defined

if (true) {
    const a = 500; 
    let b = 600;
    var c = 700;

 }
///console.log(a); // ReferenceError: a is not defined
///console.log(b); // ReferenceError: b is not defined
console.log(c); // 700

function run() {
    var d =100; 
    console.log(d); // 100
}
run();
console.log(d); // ReferenceError: d is not defined
// The variable d is not accessible outside the function where it was declared#

