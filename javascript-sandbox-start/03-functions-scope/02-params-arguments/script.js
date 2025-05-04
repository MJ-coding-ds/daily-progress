// Default Paramters 

function registerUser(user = 'Bot') {
    //if (!user) {
        //user = 'Bot';
 //   }
  return user + ' is regsitered';
}

console.log(registerUser());

//Rest Params 
function sum (...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 

// Objects as parameters
function logingUser(){
    return `The user ${user.name} with the id of ${user.id} is logged in`;

}
const user = {
    id: 1,
    name: 'Meerim',
};
console.log (logingUser(user));

console.log(
    logingUser({
        id: 2,
         name: 'John',
        })
    ); 
// you can pass the object directly

//Arrays as parameters
function getRandom (...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom(1,2,3,4,5,6,7,8,9,10);
