/*
    What is a String?

    A string is simply a sequence of characters 

    To create a string we use
    "" => double quotes 
    '' => single quotes
    `` => backticks 

    Template literals are string literals allowing embedded expressions
*/



let firstNames = 'Ana'; // defining a variable with a string 
console.log(`Hello there, ${firstNames}!`); // template literal using backticks
// ==> Hello there, Ana!
console.log(`${firstNames} walks every day at least ${1 + 2} km.`);
// ==> Ana walks every day at least 3 km. 



// ES6 Interpolation style 
let customer = { firstName: 'Foo', lastName: 'Kim'};
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log(message)

// String length (variableName.length)
const newName = 'Nick';
console.log(newName.length); // 4

// METHODS FOR STRING MANIPULATION : LOOK BELOW

// Adding to strings
let emptyContainer = "";
emptyContainer += "Hello there, student!";
console.log(emptyContainer);
emptyContainer += "How are you?";
console.log(emptyContainer);

// Accessing Characters 

    // chatAt(n) method
const greeting = "Hello there!"
console.log(greeting.charAt(0)); // H



// Finding a Substring
    //.indexOf(substr) method 
    //.lastIndexOf(substr) method -- looks from end to beginning 
const dailyMessage = "Don't be sad, be happy!";
console.log(dailyMessage.indexOf("Don't")); // 0
console.log(dailyMessage.indexOf('t')); // 4
console.log(dailyMessage.indexOf('Be')) // -1 because capitalized Be ≠ lowercased be  
console.log(dailyMessage.indexOf('be', 7)); // 14 because it will skip the position from 0 to 7 which includes the first occurance of 'be'
console.log(dailyMessage.lastIndexOf('be')); // 14

const dessert = "My favorite desser is jello";
console.log(dessert.indexOf('j')); // 22
console.log(dessert.charAt(22)); // j


// Getting a Substring 
/*
    In JavaScript we can use:
        - .substring()
        - .substr() **** DEPRECATED 
        - .slice()
*/

let withSubstring = dailyMessage.substring(0, 3);
console.log(withSubstring); // <== Don

let withSlice = dailyMessage.slice(0, 3);
console.log(withSlice) // <== Don

withSubstring = dailyMessage.substring(-3, -1);
console.log(withSubstring); // <== " " (empty string)

withSlice = dailyMessage.slice(-3, -1);
console.log(withSlice); // <== py

// Sorting the Strings

    // .localeCompare()

console.log('str1'.localeCompare('str2')); // returns 1 if str1 > str2. returns -1 if str1 < str2. returns 0 str1 === str2


// ES6 NEW STRING METHODS

// .startsWith() Method

    // str.startsWith(searchString[, position])

const str = 'To be, or not to be, that is the question.';

    console.log(str.startsWith('To be')); // true
    console.log(str.startsWith('not to be')); // false
    console.log(str.startsWith('not to be', 10)); // true

// .endsWith() Method

    // str.endsWith(searchString[, length])

    console.log(str.endsWith('question.')); // true
    console.log(str.endsWith('to be')); // false
    console.log(str.endsWith('to be', 19)); // true

// .includes() Method

    // str.includes(searchString[, position])

    console.log(str.includes('nicky')); // true
    console.log(str.includes('question')); // true
    console.log(str.includes('nonexistent')); // false
    console.log(str.includes('To be', 1)); // false