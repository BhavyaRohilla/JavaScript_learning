'use strict';
/*

/////////////////////////////////////
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
const private = 534;



////////////////////////////////////////////////
// Functions

//function that does not return anything


function myLogger() {
    console.log("Hello world");
}
//calling // running // invoking function
myLogger();


// A function with a return type
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


/////////////////////////////////////////////////
// Function Declaration vs Expression

// using function declaration
console.log(calcAge1(2020, 1989));

function calcAge1(currYear, birthYear) {
    return currYear - birthYear;
}

//function expression
//function without a name which is called as 'Anonymous Function'; function itself is being store in a variable

const calcAge2 = function (currYear, birthYear) {
    return currYear - birthYear;
}
console.log(calcAge2(2020, 1989));

//Note that a function declaration can be called before the function definition.
//But a function expression Must be called only after it has been defined;

///////////////////////////////////////////////////////
// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Swati'));


Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
    gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated(so
one average score per team).
A team only wins if it has at least double the average score of the other team.
    Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§To calculate average of 3 values, add them all together and divide by 3
§To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
GOOD LUCK 😀

*/