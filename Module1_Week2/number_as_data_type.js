const age = 34; // integer
const price = 12.99 // floating-point 

// NaN -> Not a Number 

const names = 'Sandra'; // <== string data type 
const whatIsThis = names / 2;
console.log(whatIsThis); // ==> output: NaN 

// Exponents 
console.log(2 ** 5);    // 2 * 2 * 2 * 2 * 2 => 32

// Modulo 
console.log(4 % 2) // this will have a remainder of 0
console.log(7 % 2) // this will have a remainder of 1

// Assignment Operators 
let myAge = 25; 

myAge += 1; // equivalent to x = x + y
myAge -= 1; // equivalent to x = x - y
myAge *= 1; // equivalent to x = x * y
myAge /= 1; // equivalent to x = x / y
myAge %= 1; // equivalent to x = x % y
myAge **= 1; // equivalent to x = x ** y
console.log(myAge);

// Expressions 

const result = (7 + 5) / 3 - 8 // Will follow PEMDAS 
console.log(result); // => 4