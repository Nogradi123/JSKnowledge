/*

    - .sort() method sorts the elements of an array in place and returns the array 
    
    - (an in-place algorithm is an algorithm that operates directly on the input data structure without requiring extra space proportional to the input size)

    - The default sort order is according to string Unicode code points 

*/

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort(); // We can not just call the sort function like this because the method orders the values according to string Unicode

console.log(numbers); // <= [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]

// The items are sorted as strings by default and the reason for that is the method converts elements of the array into strings and then compares them 

// BEHIIND THE SCENES OF THE .SORT() METHOD

    // The JavaScript .sort() method walks through every element in the array and compares them, based on a default compare function, or one that you give it. 

function compare(a, b) {
    if(a < b) return -1; // a is less than b
    if(a > b) return 1; // a is greater than b
    if(a === b) return 0; // a equals b
}; 

// The compare() function accepts two elements at a time, often referred to as a and b.

// If a - b > 0:
    // a is greater than b.
    // Switch b to be before a in the array.

// If a - b < 0:
    // b is greater than a.
    // Switch a to be before b in the array.

// If a - b === 0:
    // a and b are the same
    // Keep a and b in the same place.

numbers.sort(function(a, b) { //ES5
    return a - b;
});

console.log(numbers);

numbers.sort((a, b) => a - b); // ES6

console.log(numbers);

// If we want to reverse the order of the array just change the compare function 

numbers.sort(function (a, b) {
    return b - a;
});

console.log(numbers);

// SORTING STRINGS 

// If we want to orfer by ASCENDING alphabetical order, this is the only case where we don't need to provide a comparison function:

const words = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

words.sort();

console.log(words); // ["A", "AA", "First", "Goodbye", "Hello", "Second", "Third", "a", "b"] Uppercase letters are sorted before lowercase ones

// Sorting string in DESCENDING order 

    // There are two options:

    // Option 1
words.sort().reverse();

console.log(words); // ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

    // Option 2

words.sort(function(a, b) {
    if (a < b) return 1; //  1 here (instead of -1 for ASC)
    if (a > b) return -1; // -1 here (instead of  1 for ASC)
    if (a === 0) return 0;
})

console.log(words); // ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

    // We can also sort by different attributes 

words.sort(function (a, b) {
    if (a.length < b.length) return 1; //  1 here (instead of -1 for ASC)
    if (a.length > b.length) return -1; // -1 here (instead of  1 for ASC)
    if (a.length === b.length) return 0;
});

console.log(words); // ["Goodbye", "Second", "Hello", "First", "Third", "AA", "A", "a", "b"]


// Remember there is no ideal algorithm because it all depends on the data you are sorting 
