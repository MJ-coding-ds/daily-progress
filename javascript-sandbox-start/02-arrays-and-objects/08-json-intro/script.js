//APIs: sends and receives data in JSON format
//JSON: JavaScript Object Notation
//JSON is a lightweight data interchange format
//JSON is easy for humans to read and write
//JSON is easy for machines to parse and generate
//JSON is language independent
//JSON is a text format that is completely language independent
//JSON is a subset of JavaScript
//JSON is a string representation of an object
//JSON is a string representation of an array
//JSON is a string representation of a value
//JSON is a string representation of a number
//JSON is a string representation of a boolean
//JSON is a string representation of null
//JSON is a string representation of an object

const post = {
    id:1, 
    title: "Post One",
    body: 'This is the body', 
}; 

//convert object to JSON string
const str = JSON.stringify(post);
console.log(str); 

// Parse JSON 
const obj = JSON.parse(str);
const posts = [
    {id:1, title: "Post One", body: 'This is the body'}, 
    {id:2, title: "Post Two", body: 'This is the body'}, 
];
const str2 = JSON.stringify(posts);

console.log(str2); 