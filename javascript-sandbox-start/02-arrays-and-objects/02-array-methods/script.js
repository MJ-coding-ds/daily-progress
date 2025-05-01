const arr = [15, 26, 37, 48, 59];
//arr.push(60); // Adds 60 to the end of the array
//

x = arr.includes(337); // Checks if 37 is in the array

x = arr.indexOf(59); // Gets the index of 37 in the array

x = arr.slice(1); // Gets a slice of the array from index 1 to index 3 (not included)

//x = arr.splice(1, 2); // Removes 2 elements from index 1. chaning the original array , by slice not

x = arr.splice(1, 4).reverse().toString().charAt(0); // Gets a slice of the array from index 1 to index 3 (not included)


console.log(x, arr);

