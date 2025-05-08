console.log(10>20 && 30>15);//it will be false, because first one is false
console.log(10>15 || 30<45); 

// && -will return first falsy value or the last value
let a; 
a = 10 && 20; 
a = 10 && 20 && 30; 
a = 10 && 0 && 20;
a = 10 && '' && 0 && 20;   
//console.log(a);

const posts = ['Post one', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

//|| -will return the first truthy value or the last value
let b; 
b = 10 || 20; // Demonstrates the || operator
console.log(b); // Logs 10 because it's the first truthy value

b = 0 || 20; // Demonstrates the || operator with a falsy value
console.log(b); // Logs 20 because it's the first truthy value

// ?? _return the right side oprand when the left is null or underdefined. 

let c; 
c =10 ?? 20; 
c = null ?? 20;
c = undefined ?? 30;
console.log(c);