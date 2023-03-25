'use strict';


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// console.log(a, b, c);

const [x, y, z, q] = arr;
console.log(x, y, z, q);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);


// Receive 2 return value from a function

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(j, k);

//Default value

const [p = 1, w = 1, r = 1] = [8, 9];
console.log(p, w, r);