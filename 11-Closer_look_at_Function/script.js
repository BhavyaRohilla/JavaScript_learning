'use strict'

/*
// Defaults Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking)
    bookings.push(booking);
};

console.log(bookings);
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', 1000);
createBooking('LH123', undefined, 1000);


// How Passing Arguments Works_Value vs Reference

const flight = 'LH234';

const swati = {
    name: 'Swati',
    passport: 2473979874415,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mrs.' + passenger.name;

    if (passenger.passport === 2473979874415)
        alert('Checked in');
    else
        alert('Wrong passport!')
};

checkIn(flight, swati);
console.log(flight);
console.log(swati);

// Is the same as doing
// const flightNum = flight;
// const passenger = swati;


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000000);
};

newPassport(swati);
checkIn(flight, swati);


// First Class and Higher order function
//Function accepting callback function

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time
const high5 = function () {
    console.log('High Five');
};

document.body.addEventListener('click', high5);

['bhavya', 'swati', 'Tiya'].forEach(high5);

//Function Returning Function

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
}

const greeterHey = greet('Hey');
console.log(greeterHey);
greeterHey('Swati');
greeterHey('Bhavya');

greet('Hello')('Bhavya');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Swati');


//call and apply method

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book : function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};


lufthansa.book(239, 'Swati Ranjan');
lufthansa.book(635, 'Bhavya Rohilla');
console.log(lufthansa);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// console.log(book);
// book(23, 'Sarah william');

book.call(euroWings, 23, 'Sarah William');
console.log(euroWings);

book.call(lufthansa, 239, 'Chapri Boyzzz');
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};


book.call(swiss, 583, 'Mary Cooper');

//Apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData)



// bind method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

console.log(bookEW);

bookEW(23, 'Steven William');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Bhavya Rohilla');


// with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// console.log(lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat);

// addVat = value => value + value * 23;

console.log(addVat(100));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));


//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE);

const runOnce = function () {
    console.log('this will never run again');
};

runOnce();

//IIFE

(function () {
    console.log('This will never run again');
})();


(() => console.log('THIS WILL ALSO NEVER RUN AGAIN'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(notPrivate);


// closures

const secureBooking = function () {
    let passengerCount = 0;
    let swatiCount = 0;

    return function () {
        passengerCount++;
        swatiCount++;
        console.log(`${passengerCount} ${swatiCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
booker();

console.dir(booker);


let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);


// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/