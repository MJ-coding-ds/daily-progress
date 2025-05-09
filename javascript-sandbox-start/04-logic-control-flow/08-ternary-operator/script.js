//Ternary Operator
const age = 20; 
// Using an if statement
if (age >=18){
    console.log('You can vote!');
}else{
    console.log('You cannot vote');
}

//Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('you cannot vote!')

// Assiginin a conditional value to a varibale 
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements: 
const auth = true; 
//let redirect; 
// if (auth){
//     alert ('Welcome to the dashboard');
//     redirect ='/dashboard';
// }else {
//     alert('Access Denied');
//     redirect = '/login';
// }
// const redirect = auth 
// ? (alert('Welcome to the dashboard'), '/dashboard') 
// : (alert('Access denied'),'/login');
// console.log(redirect);

auth && console.log('Welcome to the dashboard');