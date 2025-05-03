// Step 1: Creating Library
const library = [{title: 'The Road Ahead', author: 'Bill Gates', readingStatus:{own: true, reading: false,read: false}}
, {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', readingStatus:{own: true, reading: false,read: false}},
{title: 'The Catcher in the Rye', author: 'J.D. Salinger', readingStatus:{own: true, reading: false,read: false}},
];

// Step 2: Adding reading status to each book
library[0].readingStatus.read = true;
library[1].readingStatus.read = true;
library[2].readingStatus.read = false;

// Step 3: Describing from first book and rename  it: 
const { title: firstBook } = library[0];

console.log(firstBook); 

//Step 4 
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);