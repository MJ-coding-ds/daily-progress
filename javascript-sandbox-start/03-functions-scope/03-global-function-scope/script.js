// Global Scope
let globalVariable = "I am a global variable";

function showScope() {
    // Function Scope
    let functionVariable = "I am a function variable";
    console.log(globalVariable); // Accessible
    console.log(functionVariable); // Accessible
}

showScope();

console.log(globalVariable); // Accessible
// console.log(functionVariable); // Unaccessible, will throw an errors

//window: window: This refers to the global window object in a browser.
//  It represents the browser window or tab and provides access to all browser APIs like alert, document, console, etc. 
// Using window. is optional when calling global functions, so alert('...') would work the same.
///window.alert('Hallo, Meerim!');

/// alert('Testing Alert alone');
console.log(window.innerHeight); 
// Accessing the window object to get the inner height of the browser window

//Global scope: a varibale declared outside of any function or block. 
//Accesibale from anywhere in the code, including inside functions and blocks.
const x =100;
console.log(x, 'in global'); 


function run() {
    console.log(window.innerHeight);
    // Function scope: a variable declared inside a function.
    // Accessible only within that function.
    console.log(x, 'in function'); // Accessing the global variable x
}
run(); // Calling the function to log the inner height of the window

if(true) {
    // Block scope: a variable declared inside a block (e.g., if statement, loop).
    // Accessible only within that block.
    console.log(x, 'in block'); 
}


function add() {
    const y =50; 
    console.log(x+y);
}

add(); 

// Global scope: var, let, const (outside function) 
// Function scope: var. Inside function only 
// Block scope: let, const. Inside { } block only 