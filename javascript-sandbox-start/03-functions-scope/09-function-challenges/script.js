//Challenge
//console.log(getCelsius(32)); // 0
//`(F - 32) * 5 / 9`.

//function getCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius
  // Formula: (F - 32) * 5 / 9
  //return (fahrenheit - 32) * 5 / 9;
//}
//console.log (getCelsius(100)); 
//console.log(`The temperature is ${getCelsius(100)} \xB0C`);

// in Array
const getCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return Math.round(celsius);
  };
  
  console.log(`The temperature is ${getCelsius(32)} \xB0C`);


  //Challenge 2: 
// Create a function that takes an array of numbers and returns the minimum and maximum values in the array.
// The function should return an object with the properties min and max.
const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
  }
  console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }


//Challenge 3:
// // On page load
//The area of a rectangle with a length of 10 and a width of 5 is 50.
// Create a function that takes the length and width of a rectangle and returns the area.
const getArea = (length, width) => {
    return length * width;
  };
  
  console.log(`The area of a rectangle with a length of 10 and a width of 5 is ${getArea(10, 5)}`); // 50