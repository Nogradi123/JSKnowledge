
// CONDITIONAL STATEMENTS

/*
    The if statement executes a statement if the specified condition is true. It the condition is false, another statement can be executed. 

    BASIC SYNTAX 

    if (condition) {
        code to execute if the condition is true.
    }

    if (condition) {
        code to execute if the condition is true
    } else {
        code to execute if the condition is false 
    }

    if (condition1) {
        code to execute if condition1 is true
    } 
    else if (condition2) {
        code to execute if condition2 is true
    }
    else {
        code to execute if condition1 and condition2 are false
    }

*/

// EXAMPLE --> We will have a discount if we are younger than 16, or older than 65 

const age = parseInt(prompt('Welcome to Ironhack cinema. How old are you?'));

if(age <= 16) {
    console.log('You have a teenager discount');
}
else if (age >= 65) {
    console.log('You have a senior citizen discount');
}
else {
    console.log('Sorry, you do not have any discounts');
}

// NESTED CONDITIONALS 

/*
    if(condition) {
        if(nestedCondition) {
            The code will execute if condition === true && nestedCondition === true
        } else {
            The code will be executed if condition === true && nestedCondition === false
        }
    }
    else {
        The code will execute if condition === false 
    }
*/

// EXAMPLE W/ NESTED CONDITIONAL 

const num1 = parseInt(prompt('Enter first number: '));
const num2 = parseInt(prompt('Enter second number: '));

if (num1 === num2) {
    console.log('The numbers are equal');
}
else {
    if(num1 > num2) {
        console.log('Number 1 is greater than number 2.');
    } else {
        console.log('Number 1 is less than number 2');
    }
}

// PRACTICE 
/*
    Let’s write an improved version of the ‘Hello, world!’ program. Let’s ask the user in which language they want to see the message. You must have, at least, three different languages.

   -  If the user wants the message in Spanish, you have to log in to the console “Hola,       mundo!”.
   -  If the user wants the message in French, you have to log in to the console “Bonjour tout le monde”.
   -  Finally, if we don’t have the indicated language, we will show “Hello, world!”.

*/

const lang = prompt('Please enter a language: ');

if(lang === 'Spanish'.toLowerCase()) {
    console.log('Hola, mundo!');
} 
else if(lang === 'French') {
    console.log('Bonjour tout le monde');
}
else {
    console.log('Hello, world!');
}

// **** SOMETIMES TO MANY CONDITIONALS CAN WORK BUT IT MAY NOT BE THE BEST SOLUTION ESPECIALLY IF YOU ARE USING TOO MANY ELSE IF STATMENTS ****


// SWITCH STATMENTS

/*

    switch (expression) {
        case value1 :
            executed code when the expression === value1
            break;
        case value2:
            expected code when the expression === value2
            break;
        case value3:
            expected code when the expression === value3
            break;
        default:
            expected code when none of the values match the expression 
    }

*/

// EXAMPLE

const characterName = prompt('Favorite Game of Thrones main character:')
let house = '';

switch (characterName) {
    case 'Khal Drogo':
        house = 'Dorthraki Horselord';
        break;
    case 'Daenerys':
        house = 'Targaryen';
        break;
    case 'Jon Snow':
    case 'Sansa':
    case 'Arya':
        house = 'Stark';
        break;
    default:
        house = 'Does not exist'
}

console.log(`Your favorite character is from the house ${house}`);