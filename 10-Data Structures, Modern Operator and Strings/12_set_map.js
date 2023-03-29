'use strict'
/*
//set
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);

console.log(orderSet);


console.log(new Set('ssswwwwaaaattttiiii'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));

orderSet.add('Garlic Bread');

orderSet.delete('Risotto');

console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('swatiranjan').size);


//  Maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('Categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr));
*/

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    }

};



// Maps - Iteration

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'Try again!']
]);

console.log(question);

// Convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}


const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('Correct') === answer));

// Convert map to array
console.log([...question]);

console.log(question.entries());
console.log(question.keys());
console.log(question.values());

