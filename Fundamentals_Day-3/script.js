/*
///////////////////////////////////////
//Truthy and Falsy Values in JS

// In JS, we have 5 'falsy' values:
// 0 , '' (the empty string), undefined, null, NaN
// what this mean is that any value that is not one of the above values is going to be converted into 'true' if we convert it into a Boolean type variable. Only the above 5 values will be converted to false on conversion to boolean values


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Swati'));
console.log(Boolean({}));   // {} - empty object returns true
console.log(Boolean(''));

const money = null;
if (money) {
    console.log("Don't spend it all :)");
}
else {
    console.log('You should get a job!');
}


///////////////////////////////////////
// Equality Operator: == vs. ===

// '===' known as strict quality operator. This operator does not perform any type coercion
// '==' is known as loose equality. It does do type coercion

console.log(18 === '18'); // Prints : false
console.log(18 == '18');  // Prints : true

// Similarly you have the !== and the != operators. These are again the strict and the loose variants variants of not equal resp.
//Always use the Strict version

const favourite = Number(prompt("What's you favorite number?"))
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else if (favourite === 7) {
    console.log('Cool! 7 is an amazing number!');
}
else if (favourite === 9) {
    console.log('Cool! 9 is an amazing number!');
}
else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');


/////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

////////////////////////////////////////////////////////
//Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀


////////////////////////////////////////////
// The Switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Watering Plants!!!!');
    case 'tuesday':
        console.log('pawri time');
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
        break;
    case 'friday':
        console.log('Record Videos');
    case 'saturday':
    case 'saturday':
        console.log('Enjoy the weekend :D');
    default:
        console.log('Not a valid day!');
}


///////////////////////////////////////////////
// Statement and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Bhavya';
console.log(`I'm Swati ${2037 - 1991} years old`);



//////////////////////////////
// The Conditional (Ternary) operates

const SwatiAge = 20;
SwatiAge >= 18 ? console.log('I like to drink wine ##') : console.log('I like to drink Water!!!!!');

console.log(`I like to drink ${SwatiAge >= 18 ? 'Wine' : 'water'}`);

//////////////////////////////////////////////
// coding challenge #4
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§
Data 1: Test for bill values 275, 40 and 430
Hints:
§To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/