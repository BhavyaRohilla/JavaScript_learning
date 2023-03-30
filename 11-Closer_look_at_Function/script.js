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

*/
