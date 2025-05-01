let x; 
const name = 'Meerim';
const age = 27;

x = 'HELLO, MY NAME IS ' + name + '  and I AM ' + age + ' YEARS OLD';

//Template Literals
x = `HELLO, MY NAME IS ${name} and I AM ${age} YEARS OLD`;

// String properties and methods
const s = 'Hello World';

x = s.length;

// Access vaöue by key 
x = s[0]; // H
x= s.__proto__;

x=s.toUpperCase(); // HELLO WORLD

x = s.charAt(0); // H
x = s.indexOf('o'); // 4
x = s.lastIndexOf('o'); // 7
x = s.substring(0, 5); // Hello

x = '    Hello World  '.trim(); // Hello World

x = s. replace('World', 'Meerim'); // Hello Meerim
x = s.includes('Hello'); // true
//x = s.split(''); // ['Hello', 'World']

console.log(x); 