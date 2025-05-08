//Truthy & Falsy Values
// const email = 'test@test.com'; 
// if(email){
//     console.log('you passed in an email')
// }
// console.log(Boolean(email));


// Falsy Values
//-false
//-0
//-"" or ''(empty string)
//-null
//-undefined 
//-NaN 


// const x = false; 
// if(x){
//     console.log('This is truthy');
// } else {
//     console.log('This is falsy');
// }
// console.log(Boolean(x));

// if we will pass x=0, it will again false, because: 

//Truthy Values
//-Everything else that is not falsy
//-true
//-'0'(o in a string)
//-' ' (space in a string)
//[] (empty array)
//{} (empty object)
//-function (){} (empty function)

const x = []; 
if(x){
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}
console.log(Boolean(x));

//Truthy and falsy caveats 

const children = 0; 
if(!isNaN(children)){
    console.log(`You have ${children} children`)
}else {
    console.log('Please enter number of children')
}
//Checking for empty arrays
const posts = ['Post One', 'Post Two']; 

if (posts.list > 0){
    console.log('List Posts');
}else {
    console.log('No Posts');
}

//Checking for empty objects 
const user = { };

if (Object.keys(user).list >0) {
    console.log('List User');
} else{
    console.log('No User');
}

//Loose Equality (==)
console.log(false === 0);
console.log(''===0);
console.log(null=== undefined);