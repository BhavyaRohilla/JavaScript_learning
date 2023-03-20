'use strict'
/*
// Array can be created in two ways

const friends = ['Ram', 'Sham', 'Swati', 'Sita']; // Array Literal Syntax
const years = new Array(2000, 2001, 2002, 2003); // Array Function Syntax

console.log(friends);
// We can fetch element from the array using the following:
console.log(friends[0], friends[1], friends[2], friends[3]);

// Check the length of the array
console.log(friends.length);

// Mutate the element of the array
friends[2] = 'Tiya';
friends[4] = 'Dave'; // Note how we can add element to the array
console.log(friends);

friends[6] = 'Eve'; // We skipped index 5 now the index 5 is 'empty'
console.log(friends);

console.log(typeof friends[5]); // and the type prints: undefined


// Note that even though we defined the friends variable as const, we are still able to change the content of the array This is because only primitive values are immutable, but the array is not a primitive values.

// Hence, the contents of the  friends array can be change, but if you try to point the variable friend to a different array, then you will see an error:

// friends = []; // Attempt to assign to const or read only variable

// An array can holds values of different type at the same time
// consider the following array that is supposed to store all the values related to one person

const friendOfSwati = ['Tiya', 'Bhavya', 'Tisha']
const swati = ["Swati", "Ranjan", 20, friendOfSwati]
console.log(swati);
*/


///////////////////////////////////////////////////////////
//Basic Array operation
// Add elements to the end of the array. push returns the length of the array resulting after pushing the element
const friendOfSwati = ['Tiya', 'Bhavya', 'Tisha'];
friendOfSwati.push("Eve");
console.log(friendOfSwati);

// Add element beginning of the array
friendOfSwati.unshift("Anna");
console.log(friendOfSwati);

// Remove the last element of the array. Returns the removed element
let removedElement = friendOfSwati.pop();
console.log(friendOfSwati);
console.log(removedElement);

// Remove the first element of the array
removedElement = friendOfSwati.shift();
console.log(friendOfSwati);
console.log(removedElement);


//Find the index at which a particular element is at
let index = friendOfSwati.indexOf('Bhavya');
console.log(index);

//If the element is not present, it returns -1
index = friendOfSwati.indexOf("Radha");
console.log(index);

// Find if an element exist in the array;
let elementExist = friendOfSwati.includes("Tisha");
console.log(elementExist);

elementExist = friendOfSwati.includes("Eve");
console.log(elementExist); // prints:false

// NOte that includes method uses a strict equality for this check

let allYears = [2012, 2016, 2023]
console.log(allYears.includes(2023)); // prints: true
console.log(allYears.includes("2023")); // prints: false