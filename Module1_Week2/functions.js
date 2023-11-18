// Functions are reusable pieces of code that perform specific actions 

/*

    The FUNCTION DECLARATION is the process of creating a function but not executing it

        function functionName(parameters) {
            code to execute
        }

    The process of executing (calling) the function is known as FUNCTION INVOCATION

        functionName(arguments);

    Syntax of a function 

        function <name> ([<parameters>]) {
            <instructions>

            [return <expression>]
        }

    A function can accept zero, one, or multiple parameters. If there are multiple parameters they need to be separated by commas 

    PARAMETERS are variables that are part of the function declaration. Also known as placeholders since they don't have to represent real values passed to thefunction.

    ARGUMENTS are (real) value passed to finction in the moment of its invocation

    *** Potential interview question: A JavaScript function always returns something. When a returning value is not specified, the function returns undefined. ***
*/

// function with no parameters
function sayHelloMary() {
    console.log('Hello, Mary');
}

sayHelloMary(); // function invocation 

// function with one parameter
function sayHello(name) {
    console.log(`Hello, ${name}`);
}

sayHello('Mike');

//function with multiple parameters
function sayHelloClass(classmate1, classmate2, classmate3) {
    console.log(`Hello ${classmate1}, ${classmate2}, ${classmate3}!`);
}

sayHelloClass('Mat', 'Jo', 'Ana');


// RETURNS 

// The return statement delivers value as a final result of the bundled actions that took place in the function body 

function printName(name) {
    return `Name is ${name}.`;
}

console.log(printName('Peter'));

// The return statement is the very last piece of code that will execute in the function. Any code added after the return doesn't exist for the function since it finishes the execution with the return statement 

function printNames(name) {
    return `Name is ${name}.`;
    console.log('Hello, I am after the return statement.');
  }
  
  printNames('Yo'); // => Name is Yo.

// MULTIPLE RETURNS 

// One function can have more than one return statement 

function printName(name) {
    if(name.length === 0) {
        return 'Please provide a valid name';
    }

    return `Name is ${name}`;
}

console.log(printName(''));
console.log(printName('Gary'));

// RETURN VALUES IN A OBJECT 

function getUserInfo(firstName, lastName) {
    const userInfo = {
        firstName: firstName,
        lastName: lastName
    };

    return userInfo;
}

console.log(getUserInfo('Nicholas', 'Nogradi'));

// utilize the return for the function 
const userData = getUserInfo('Karina', 'Rodriguez');
const firstName = userData.firstName;
console.log(firstName);


// RETURN VALUES IN AN ARRAY 

function getFavorites(fav1, fav2, fav3) {
    const favorites = [fav1, fav2, fav3];

    return favorites;
}

getFavorites('javascript', 'html', 'css');

const favoritesArray = getFavorites('javascript', 'html', 'css');
const favorite1 = favoritesArray[0];
const favorite2 = favoritesArray[1];
console.log(favorite1, favorite2);


// PRACTICE 
/*

    1.  Create a function that accepts 3 numbers as parameters, and returns their sum.

    2. Create a function named isNameOddOrEven() that accepts a string as a parameter. The function should return whether a received string has an odd or even number of letters. The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.

*/

// 1
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(1,2,3));

// 2
function isNameOddOrEven(name) {
    if(name.length % 2 === 0) {
        return `${name} has an even number of letters`;
    }

    return `${name} has an odd number of letters`;
}

console.log(isNameOddOrEven('Tom'));