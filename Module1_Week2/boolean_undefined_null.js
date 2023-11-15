/*
    A boolean or boll expression can result in the value of either TRUE or FALSE

    Logical expressions in JavaScript are evaluated left to right 
*/

                                        // BOOLEAN LOGICAL OPERATORS

// OR Operator ||
    // expr1 || expr2
    // if expr1 or expr2 is true, the result will be true. If both are false , then the expression result will be false.
    let x  = 5;
    true || true; // <== true
    true || false; // <== true
    false || true; // <== true
    console.log((4 > x || 7 > x), '****');
    false || false; // <== false 
    false || 4 > 2; // <== true


// AND Operator &&
    // expr1 && expr2; 
    // if expr1 and expr2 are true, the result will be true. If one of the expressions is false, the result will be false. If both expressions are false, the result will be false 

    true && true; // => true
    true && false; // => false
    false && true; // => false
    false && false; // => false
    true && 4 > 2; // => true


// NOT Operator !
    // !expr1; 
    // If the expression is true, the result will be false, and vice versa 

    !true; // => false
    !false; // => true
    !(4 > 2); // => false

/*
    The UNDEFINED is primitive value automatically assigned to variables when they are declared 
*/
let firstName;
// console.log(firstName); // <== undefined


/*
    A NULL value respresents a reference that points to a nonexistent address, meaning the variable hasn't been declared yet. In JavaScript, NULL is often used to represent value unknown variables:

    You will often use this value when checking if a variable has even been declared or when you intentionally want to reassign the value of some variable to null
*/
let lastName = null;
console.log(lastName); // <== null

// FALSY values will evaluate to FALSE
// TRUTHY values will evaluate to TRUE. 

if ('false') {
    console.log('Passed thingy is truthy');
  } else {
    console.log('Passed thingy is falsy');
  }
  
  // => 'Passed thingy is truthy'
  

// All primitive data types are IMMUTABLE
// Immutability means that once one of the primitive values is created, it can't be modified 
// Values are immutable but variabled are mutable which means you can reassign them:

let city = 'miami';
console.log(city); // <== miami

// we CAN re-assign our variable to another value
city = 'berlin';
console.log(city); // <== berlin

// but still CAN NOT change the value "berlin"
city[0] = 'B';
console.log(city); // <== berlin
