let x;
const person = {
    name: "John",
    age: 30,
    isAdmin: true, 
    address: {
        city: "New York",
        country: "USA",
        state: "NY", 

    },
    hobbies: ["reading", "traveling", "sports"],

}; 
x = person.name;
x=person['age'];
x=person.address.state;
x=person.hobbies[1];

person.name = 'Meerim';
x= person.name;

delete person.age;

person.hasChildre =true; 

person.greet = function () {
    console.log("Hello, my name is " + this.name);
}
person.greet();

x = person;

console.log(x);


