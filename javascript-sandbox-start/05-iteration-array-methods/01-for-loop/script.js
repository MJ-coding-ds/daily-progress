//For Loop 

// for(let i = 5; i<=10; i++){
//     console.log('Number ' +i);
// }

// for(let i = 0; i<=10; i++){
//     if (i==7){
//         console.log('7 is my lucky number');
//     }else{
//     console.log('Number ' +i);    
//     }
// }

// //Nested loops
// for(let i=1; i<=10; i++){
//     console.log('Number ' +i);

//     for (let j=1; j<=10; j++){
//         console.log(`${i} * ${i * j}`);
//     }
// }

//Lopp throug an array 
const names = ['Meerim', 'Sam', 'Sarah', 'John', 'Tim'];
for (let i=0; i<names.length; i++){
    if(i===0){
        console.log(names[i] + ' is the best' )

    } else{
    console.log(names[i]);    
    }
}