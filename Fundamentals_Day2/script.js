/*

/////////////////////////////////
// String and Template Literals

const firstName = "Swati";
const job = "student";
const birthYear = 2002;
const year = 2023;

const details = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(details);

//Alternatively you could use Template Literals.
let message = `I'm ${firstName}, a ${(year - birthYear)} years old ${job} !`;
console.log(message);

//You can also use template strings to write multi line Strings
console.log(`my name is bhavya
i'm a student
learning javascript`);



////////////////////////////////////////
// Taking Decisions: if / else statement

const age = 15;

if (age >= 18) {
    console.log('Swati can start driving license');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Swati is too Young. wait another ${yearsLeft} years :)`);
}


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀


//////////////////////////////
// Type Conversion and Coercion

// Type Conversion

// This won't work obviously
let currentYear = 2023;
console.log("In 10 years, it will be " + currentYear + 10); //prints: 202310
console.log(currentYear + 10); //prints: 202310

// Hence we have to do this instead
console.log("In 10 Years, it will be " + Number(currentYear) + 10); // Prints: In 10 years, it will be 202310 
console.log(10 + Number(currentYear) + 10);

console.log(10 + Number(currentYear) + 10 + " Swati");

// what if we try to convert something to number that is not really a number
console.log(Number("RGBK21")); // prints: NaN

// The 'NaN'(Not a Number) is generated. js gives us a NaN value when an operation is involving numbers fails to generate a value that is a number

// Strangely enough, the typeof NaN is a number
console.log(typeof NaN);//prints: number

// similarly we can covert Number to Strings
console.log(String(23), 23);// you can see that the values are different because they will be differently colored in console   


////////////////////////
//Type Coercion

// Type coercion happens when a operator is dealing with two value that have different types. In this case, JS will - behind the scenes - convert one value to another type

// For eg. when the '+' operator is given a number and a string, it will be convert number to String

console.log("In 10 Years, It will be " + currentYear + 10);// print: In 10 Years, It will be 202310
console.log('23' - '10' - 3); //prints: 10
console.log('23' + '10' + 3); // prints : 2023103
console.log('23' * '2'); // prints :  46
console.log('46' / '2'); //prints : 23
console.log('46' > '2'); // prints: true

// so the anomaly is the '+' operator that converts number to strings. all other convert, String to numbers
console.log('23' + '10' - 3); //prints: 2307
console.log('23' - '10' + 3); //prints : 16
console.log('23' - '10' + '3'); // prints : 133
console.log(2 + 3 + 4 + '5'); // prints: 95

// confused? lol
*/



