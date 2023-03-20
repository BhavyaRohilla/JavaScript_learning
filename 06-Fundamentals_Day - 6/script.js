/*
///////////////////////////////////////////
// Introduction to Objects

let swati = {
    firstName: "Swati",
    lastName: "ranjan",
    birthYear: 2001,
    friends: ['ram', 'sham', 'geeta', 1, 2],
    hasDriveLicense: true
};

// Dot Vs. Bracket Notation
console.log(swati);

console.log(swati.firstName);
console.log(swati['lastName']);

const nameKey = 'Name';
console.log(swati['first' + nameKey]);
console.log(swati['last' + nameKey]);

// console.log(swati.'last' + nameKey);


const interestedIn = prompt('What do you know about swati? choose between firstName, lastName, birthYear, friends, hasDriveLicense');

if (swati[interestedIn]) {
    console.log(swati[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, birthYear, friends, hasDriveLicense');
}

swati.location = 'Rajasthan';
swati['instagram'] = '@swati';
console.log(swati);

//challenge
//"Swati has 3 friends, and his best friend is called micheal"
console.log(`${swati.firstName} has ${swati.friends.length} friends, and his best friend is called ${swati.friends[0]}`);

//////////////////////////////////////////////
// Object Methods

const bhavya = {
    firstName: 'Bhavya',
    lastName: 'Rohilla',
    birthYear: 2001,
    job: 'Student',
    friends: ['Swati', 'harsh', 'Tiya'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     console.log(this);
    //     console.log(birthYear);
    //     return 2023 - birthYear;
    // }

    calcAge: function (birthYear) {
        return 2023 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}

console.log(bhavya.calcAge());
console.log(bhavya);
// challenge : bhavya is a 22 year old student, and he has a driver's license
console.log(bhavya.getSummary());



Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
    / (height * height)(mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same
method on both objects).Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀



///////////////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');
// console.log('Lifting weights repetition 6 ');
// console.log('Lifting weights repetition 7 ');
// console.log('Lifting weights repetition 8 ');
// console.log('Lifting weights repetition 9 ');
// console.log('Lifting weights repetition 10 ');

for (let i = 0; i < 30; i++) {
    console.log(`Lifting weights repetition ${i}`);
}


///////////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing

// const swatiFriends = ['Ram', 'Shyam', 'Geeta', 'Sita', ['Micheal', 'Peter', 'Steven'], true];
const types = [];

// console.log(swatiFriends[0]);
// console.log(swatiFriends[6]);

for (let i = 0; i < swatiFriends.length; i++) {
    console.log(swatiFriends[i], typeof swatiFriends[i]);

    //Filling types array
    // types[i] = typeof swatiFriends[i];
    types.push(swatiFriends[i])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);


//////////////////////////////////////////
// Continue and Break

console.log('--- ONLY STRINGS ---');
const swatiFriends = ['Ram', 'Shyam', 123, 235, 'Geeta', 'Sita', ['Micheal', 'Peter', 'Steven'], true];
for (let i = 0; i < swatiFriends.length; i++) {
    if (typeof swatiFriends[i] !== 'number') continue;
    console.log(swatiFriends[i], typeof swatiFriends[i]);
}

console.log('--- BREAK WITH NUMBERS ---');
const swatiFriends = ['Ram', 'Shyam', 123, 235, 'Geeta', 'Sita', ['Micheal', 'Peter', 'Steven'], true];
for (let i = 0; i < swatiFriends.length; i++) {
    if (typeof swatiFriends[i] === 'number') break;

    console.log(swatiFriends[i], typeof swatiFriends[i]);
}


/////////////////////////////////////////////
//Looping Backwards and Loops in Loops

const swati = ['swati', 'ranjan', 2023 - 2002, 'student', ['Micheal', 'peter', 'Steven'], true]

for (let i = swati.length - 1; i >= 0; i--) {
    console.log(i, swati[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

/////////////////////////////////////////
// The While Loop

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting Weights Repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1.
First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2.
To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3.
Call the function with the 'totals' array
GOOD LUCK 😀

*/