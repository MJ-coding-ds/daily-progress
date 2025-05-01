let x; 
const  todo = new Object();

todo.id = 1;
todo.name = "Learn JavaScript";
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 34.5,
            lng: 45.6 
        },
    }, 
};

x= person.address.coords.lat;

const obj1 = { a:1, b:2 };
const obj2 = { c:3, d:4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);


const todos = [
    { id: 1, name: "Learn JavaScript", completed: false },
    { id: 2, name: "Learn Python", completed: true },
    { id: 3, name: "Learn Java", completed: false },
];

x = todos[0].name;

x = Object.keys(todos);

x = Object.keys(todos).length;

x = Object.values(todos);

x = Object.entries(todos);

console.log(x);