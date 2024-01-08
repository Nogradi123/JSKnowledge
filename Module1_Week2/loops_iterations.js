
// In JavaScript loops and iterations are used to execute repetitive tasks 

// WHILE statement 
/*

    while (condition) {
        code to be executed while the condition is true
    }

    while statement creates a loop that executes a specified code as long as the condition evaluates true.

*/

let i = 0;

while (i <= 100){
    console.log(i);
    i++; // this is the same as i = i + 1
}


// DO...WHILE statement 
/*

    The do/while statement creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

    do {
        block of code to be executed 
    } while (condition);

*/

let x = 0
do {
    x += 1
    console.log(x)
} while (x <= 100);


// FOR statment 
/*

    The FOR statment creates a loop with three different values separated by semicolons: initialization, condition, and final expression 

    for(initialization; condition; finalExpression) {
        code to execute 
    }

    Initialization -- the variable declaration 

    Condition -- what has to happen to finish the iteration. Basically once the condition is false the loop finishes 

    Final Expression -- the increment of the variable used to iterate our code

*/

for(let j = 0; j <= 100; j++) {
    console.log(j);
}



// FOR...OF statement 
/*

    The for...of statement, replaces the forEach(), creates a loop iterating over iterables such as strings, arrays, etc. Cleaner and shorter syntax than the for loop.

    for(value of iterable) {
        some statement goes here 
    }

*/

const someIterable = 'amsterdam';

for(const value of someIterable) {
    console.log(value);
}

const someArray = [1, 2, 3, 4];

for(let value of someArray){
    value *= 2;
    console.log(value);
}


// BREAK statment 
/*

    The break statment exits a switch statement or a loop(for, for in, while, do...while)

    When the break statement is used in a loop, it breaks the loops and continues executing the code after the loop (if there is any code after)

 */

i = 0;

while( i < 5) {
    i++;
    console.log(`The number is: ${i}.`);
    if(i === 3) {
        break;    // This break does not exit an if statement, it only exits the loop
    }
}



// CONTINUE STATEMENT
/*

    The CONTINUE statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop

    The difference between continue and the break statement, is instead of “jumping out” of a loop, the continue statement “jumps over” one iteration in the loop.

    However, when the continue statement is executed, it behaves differently for different types of loops:
        - In a while loop, the condition is tested, and if it is true, the loop is executed again
        - In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done

*/
let y = 0

while( y < 5) {
    y++;
    if ( y === 3) {
        continue;
    }
    console.log(`The number is: ${y}.`);
}

// PRACTICE 

/*

Let’s write a loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and print that on the screen.

*/

for(let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}

// FOR...IN LOOP 

const object = {
    a: 1,
    b: 2,
    c: 3
};

let sum = 0;
for(let key in object) {
    sum += object[key]
}
console.log(sum)
// Expected output 
// 1
// 2
// 3