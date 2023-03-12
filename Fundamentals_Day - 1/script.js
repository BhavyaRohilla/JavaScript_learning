/*
/////////////////////////////////////
// Linking a JavaScript File
let js = "Hello world";
console.log(js);

console.log(40 + 8 + 23 - 10);


/////////////////////////////////////////////
// values and variables

console.log("swati");
console.log(21);

let firstName = "Swati Ranjan"

console.log(firstName);

let number = 26;
console.log(number);


/////////////////////////////////////
// variable name convention

let swati_ranjan = "SR";
let $function = 27;
let PI = 3.1415;

let myCurrentJob = "Student";

console.log($function)



///////////////////////////////
// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun)

console.log(typeof javaScriptIsFun)
console.log(typeof 26)
console.log(typeof 'bhavya')
console.log(typeof null)

let number;
//when a variable is first declared in js, it is 'undefined' ans it's type is also 'undefined';
console.log(typeof number)
console.log(number)

//Note the following though : 'null' is again both a type as well as a value, just like 'undefined'
// so the type of undefined return undefined, but typeof null return the object;
// so the following make no sense. so there is normally considered as a bug in js(?);


///////////////////////////////////////
// let, const, var

// There are 3 different ways of defining variables in js - let, const, var

// let can be used when you want to 'mutate' a variable, i.e. assign it a value only to reassign it later

let firstName = "swati";
firstName = "bhavya";

//const is used when the value is assigned to that variable cannot be reassigned - 'immutable'

const yearofBirth = 2021;
// yearofBirth = 2022;
// console.log(yearofBirth) ya hma nahi karna

// For the same reason, creating a const variable without assigning a value to it is invalid;

// const yearofDeath; invalid


//we don't even need to define variable at all, we can directly write the name of variable and be done with it;
// but this is a very bad idea, because in that case js will create a property on the global object (?);
middleName = 'ram';
console.log(middleName);

var job = 'programmer';
console.log(job);


////////////////////////////////
// Basic operators
// Math operators

const now = 2037;
const ageSwati = now - 1991;
const ageSarah = now - 2018;
console.log(ageSwati, ageSarah);


console.log(ageSwati * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 = 2*2*2; **(exponential operator)

const firstName = "Swati";
const lastName = "Ranjan";
console.log(firstName + ' ' + lastName);

// Assignment operator

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--;
console.log(x);

// comparison operator

console.log(ageSwati > ageSarah); // >, <, >=, <=;
console.log(now - 1991 > now - 2018);

///////////////////////////////
// operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence "is link ko copy kra aur browser ka url ma paste karka wha sa padhe"

let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10 , y = 10;

*/

// ya wala challenge kal tak complete karna swati ko;

// Coding Challenge #1
// Mark and John are trying to compare their BMI(Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// §Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// §Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall.


