// **** .FILTER() ****

/*

    - The .filter() method iterates through an array and creates a new array with all elements that pass the condition we set

    - in ES5 syntax .filter() takes a call back function. If that callback function return TRUE, then the item will be in the new array. If it returns FALSE then that item will not be in the new array

*/

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

// PRACTICE

// Given the following array, filter the ones who are eligible to go to bars in the USA. 

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
];

const ofDrinkingAge = people.filter(function(person) {
    return person.age >= 21;
})

console.log(ofDrinkingAge)

// #2

// Giving the following arrays of objects, let’s filter just the one with a pool.

const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
];

const placesWithPool = places.filter(function (hasPool) {
    return hasPool.pool === true;
})

console.log(placesWithPool)

// #3

// Given an array of numbers, filter out the ones that are not even, and are greater than 42.

const number = [1, 60, 112, 123, 100, 99, 73, 45];

const result = number.filter((number) => number % 2 === 1 && number > 42);

console.log(result);
// [ 123, 99, 73, 45 ]
