/*

    - Functions are treated as so-called first-class objects 
    - If functions are treated as objects that means they can be assigned to variables, which brings us to FUNCTION EXPRESSIONS

*/

// **** FUNCTION EXPRESSION ****

// function delcaration 
function welcomeMessage(message) {
    return message;
}

// function assigned to variable 
const greeting = welcomeMessage('So nice to have you here! Welcome!');

console.log(greeting);

// function expression - is a function without name stored in a variable 
const helloThere = function (message) {
    return message;
}

console.log(helloThere('Hi there! So nice to meet you!'));

/*

    Function declaration vs. function expression 

        - A function declaration is a named function and can be stored in a variable if needed (example with greeting). A function expression is an un-named (or so-called anonymous) function that is stored in the variable.
        Both can be reused throughout the code.

        - There is a difference but not related to what they do, but how they are executed
*/

// function declaration (statement)

checkFuncDeclaration(); // => Func declaration CAN be invoked before it's defined

function checkFuncDeclaration() {
    console.log('Func declaration CAN be invoked before it is defined'); 
}

// function expression 

// checkFuncExpression(); // => ReferenceError: checkFuncExpression is not defined 

// const checkFuncExpression = function () {
//     console.log('Func expression CAN NOT be invoked before it is defined');
// }


// **** HOISTING ****

/* 

    Hoisting is a concept related to the way how programming language gets interpreted by a machine that executes it. This concept is related to any type of variable and data types, and it is not correlated to the functions only

    JavaScript code get executed from top to bottom and from left to right. This implies that to use a variable, you need declare it first. However this is not the case when it comes to FUNCTION DECLARATION. 
        - Function declaration gets hoisted to the top of the code before any other code gets executed 
        - How this process of lifting function declarations happens? 
            -- Before any code runs it needs to be interpreted. During the process of interpretation, function declarations get hoisted on top of the code. This is why we are able to call the function before we even declare it. 
            -- As for the execution phase, function declarations are already intepreted and loaded, which means they can be used although they will be defined at some point later on. This process doesn't happen with function expressions. 
*/


// **** CALLBACKS ****

/*

    Functions can be passed as parameters (arguments) to other functions, which in this case we are talking about CALLBACKS

    CALLBACK functions are used to make sure a particular code doesn't execute until another code has already finished execution 

*/
// Callbacks are the way to make sure that some piece of code doesn't execute before some other code hasn't finished executing
// A real world example could be when getting data from a DB or an API we want to make sure the data can be rendered so the user doesn't just get a blank page. 
// When invoking a function with a callback, make sure not to use () when it comes to the callback function.

// Example 

function eatDinner(callback) {
    // the parameter "callback" is just a placeholder, you can use any other word
    console.log('Eating the dinner!');
    callback();
}

function eatDessert() {
    console.log('Eating the dessert!');
}

eatDinner(eatDessert); // <== make sure when invoking a callback function NOT to use ();
// Eating the dinner!
// Eating the dessert!



// **** ANONYMOUS FUNCTIONS ****

/*

    - An anonymous function is a function without a name 
    - An anonymous function usually is not available to be used after its initial creation
        -- the reason to create a function without a name is that it will be used just in that very moment and never again in your code, so no need to name them. 

*/

// Anonymous functions as other function's arguments 
    // - Can be used as an arguments passed to another function: 

// Example 1
function printName(name, anonFunc) {
    anonFunc(name);
}

printName('sandra', function(name) {
    console.log(name[0].toUpperCase() + name.slice(1));
})
// => Sandra

function getLength(str, anonFunc) {
    anonFunc(str);
}

getLength('aleksandra', function (str) {
    console.log(`${str} has ${str.length} letters`);
});
// => aleksandra has 10 letters. 

getLength('nick', function(str) {
    console.log(`${str} has ${str.length} letters.`);
});
// => nick has 4 letters.

// we will use anonymous functions as arguments in setTimeout() JavaScript native method:
setTimeout(function () {
    console.log('I am anonymous function and I will execute after 1 second.');
}, 1000);


// **** ARROW FUNCTIONS ****

// An arrow function expression is a syntactical alternative to a regular function expression 

// function expression syntax
const greeting1 = function (name) {
    console.log(`Hello, ${name}`);
};

// arrow function syntax 
const greeting2 = name => {
    return name; 
}

/*
    - The keyword function is omitted, the parameter doesn't have braces around, and there's => arrow between the parameter and the body ({...}) of the function 
*/

const greeting3 = name => console.log(`Hello ${name}`); // can be shortened since we return only one expression 

greeting3('Ana');

/*

    Conclusion: If the right side is only a one-line expression, we can omit the curly braces and the return statement is omitted as well (the return statement is implied). However, if we need to write multiline statements in the function, then we can do it using the curly braces {...} and in that case, we have to use the return statement as well.

*/

// REVIEW ARGUMENT OBJECT