// print number from 1 to 100

// for numbers from 1 to 100
// for (let i = 1; i <= 100; i++) {
//     // for multiples of three print "Fizz" instead of the number 
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log('Number ' + i);
//     }
//}

// for multiple of fice print "Buzz" 
// for (let i = 1; i <= 100; i++) {
//     // for multiples of three print "Fizz" instead of the number 
//     if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log('Number ' + i);
//     }
// }

// // for numbers whicha are multiples of both 
// // three and five pront "FizzBuzz"
// for (let i = 1; i <= 100; i++) {
//     // for multiples of three print "Fizz" instead of the number 
//     if (i % 3 === 0 && i % 5 === 0) 
        
//         {
//         console.log('FizzBuzz');
//     } else {
//         console.log('Number ' + i);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     // for multiples of three print "Fizz" instead of the number 
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//     }
//     else if (i % 3 === 0) {
//         console.log('Fizz');
//     }else if(i % 5 === 0){
//         console.log('Buzz')
//     } 
    
//     else {
//         console.log('Number ' + i);
//     }
// }

// while loop: 
let j = 1; 
while (j <= 100) {
    if (j % 15 === 0) {
        console.log('FizzBuzz');
    } else if (j % 3 === 0) {
        console.log('Fizz');
    } else if (j % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(j);
    }
    j++;
}