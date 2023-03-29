'use strict'

/*
// String Level 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);


console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats

    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat');
    else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Swati'));
console.log(typeof new String('swati'));

console.log(typeof new String('swati').slice(1));


// String Level 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log('swati'.toUpperCase());


// Fix capitalization in name
const passenger = 'sWati';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@swati.io';
const loginEmail = '        Hello@swati.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    }
    else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');

checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');



// Level 3

//Split and join

console.log('a + very + nice + string'.split('+'));
console.log('Swati Ranjan'.split(' '));

const [firstName, lastName] = 'Swati Ranjan'.split(' ');
console.log(firstName, lastName);

const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};


capitalizeName('swati ranjan');
capitalizeName('bhavya rohilla');


// Padding

const meassage = 'Go to gate 23!';
console.log(meassage.padStart(25, '+').padEnd(30, '+'));

console.log('swati'.padStart(25, '+'));


const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(123456789123));


// Repeat

const message2 = 'Bad weather.. All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in lines ${'Air'.repeat(n)}`);
};

planesInLine(5);

*/

// Level 4