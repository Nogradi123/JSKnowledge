// **** .REDUCE() ****

/**

    - .reduce() is a method that turns a list of values into one value 
        * Real life example could be a reduction in cooking when many ingredients are reduced into becoming one dish

    GENERAL SYNTAX

    array.reduce(function (accumulator, currentValue) {
        return accumlator + currentValue;
    })

        ** Accumulator is an accumulated value of each call. In the first round, it's    assumed it's the first value from the array unless we state differently
        ** currentValue is the current element in each iteration that will be added to the accumulator

    ES6 SYNTAX
    array.reduce((accumlator, currentValue) => accumulator + currentValue)


*/

// EXAMPLE - SUM 
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumlator, currentValue) {
    console.log('accumulator is: ', accumlator, 'and current value is: ', currentValue);
    return accumlator + currentValue;
});

console.log('total is:', total);

// Example - SUM with initialValue

const list = [12, 9, 1, 8];

const totalList = list.reduce(function (accumlator, currentValue) {
    console.log('accumulator is: ', accumlator, 'and current value is: ', currentValue);
    return accumlator + currentValue;
}, 23);

console.log('total is: ', totalList); // we see that the initial value of the accumulator is no longer the first element from the array (which is 12), but instead that is 23. Here we see that we can pass the second argument to reduce, and that value will become the initial value.


// Caluate the product of all elements in an array 
const productNum = [2, 4, 6, 8];

const totalProd = productNum.reduce((accumlator, currentValue) => accumlator * currentValue);

console.log(totalProd);

// .reduce() works for iterating over arrays, regardless of the data type 

const words = ['This', 'is', 'one', 'big', 'string'];

const bigString = words.reduce(function (sum, word) {
    return sum + word;
});

console.log(bigString);

// .reduce() with OBJECTS

// * reduce while using objects can get a bit tricky but the way out is to be by setting an initial value

const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 49 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 }
];

const ages = people.reduce(function(sum, person) {
    return sum + person.age;
}, 0);

console.log(ages); // <== 142

// PRACTICE 

// Given a menu of foods and their calories, calculate the average number of calories for the entire list

const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
];

const averageCalories = menu.reduce(function (sum, foodName) {
    let totalCalories = sum + foodName.calories / menu.length;
    return totalCalories;
}, 0);

console.log(averageCalories);