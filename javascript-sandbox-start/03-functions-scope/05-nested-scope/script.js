// Nested Scope
function first() {
const x = 100; 
function second() {
   const y = 200;
   console.log(x+y); // 100
    }
    //console.log(y); // undefined
   second(); 
}
first(); // 300
// The inner function can access the variables of the outer function


if (true) {
    const x = 100; 
    if(x === 100) {
        const y = 200;
        console.log(x+y); // 300
    }
    //console.log(y); // undefined
   second(); 
}