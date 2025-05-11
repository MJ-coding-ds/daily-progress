//For of Loop
// LOOP through ARRAYS 
const items = ['book', 'table', 'chair', 'kite'];
const users = [{name: 'Meerim'},{name: 'Kate'}, {name:'STeven'}];

// for (const item of items) {
//     console.log(item);
// }

for(const user of users ){
    console.log(user.name);
}

// Loop over strings 
const str = 'Hello world'; 
for(const letter of str ){
    console.log(letter);
}

// LOOP over Maps 
const map = new Map();
map.set('name', 'Meerim')
map.set('age', 33);
for (const [key, value]of map){
    console.log(key, value);
}