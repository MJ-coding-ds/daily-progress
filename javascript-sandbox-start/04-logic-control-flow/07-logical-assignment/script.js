// ||= assigns the right side value only if the left is falsy 

let a = false; 
// if (!a){
//     a=10;
// }

//a = a || 10;

a ||=10;
console.log(a);

//&&= assigns the rigth side value only if the the left is a truthy value;
let b = 10; 
// if(b){
//     b=20;
// }

//b = b && 20;
b &&=20;
console.log(b)

//??= assigns the right side value only if the left is null or indefined
 let c = null; 
 if(c===null || c===undefined){
    c=20;

 }
 c=c?? 20;
 c??=20; 
 
 console.log(c);