'use strict'
/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2023 - birthYear);
    console.log(this);
};
calcAge(2002);

*/

const swati = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
swati.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = swati.calcAge;
matilda.calcAge();


const f = swati.calcAge;
console.log(f);

/*
const calcAge1 = birthYear => {
    console.log(2023 - birthYear);
    console.log(this);
};
calcAge1(2001);
*/
