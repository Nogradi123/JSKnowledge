// ARRAYS are data structures that allow us to group a collection of elements together in one variable

/*

    We can access each of the elements individually using an index, which represents the position of each element in the structure of an array, or we can pass them around grouped as the array

*/

// DECLARATION 

const arr1 = []; // declared empty 

const arr2 = ['Pedro', 2, true]; // can declare with elements already in it and elements of an array don't have to all be the same type. Can mix strings, numbers or any other type of data.


// ACCESSING ELEMENTS

    // accessing individual elements in the array by their position in the array, called the index
    // The first index of an array will always be ZERO

const array3 = ['Pedro', 'Jake', 'Joan', 'Mike'];
console.log(array3[0]); // Pedro
console.log(array3[1]); // <== Jake
console.log(array3[2]); // <== Joan
console.log(array3[3]); // <== Mike
console.log(array3[99]); // <== undefined

    // When trying to access an index that does not exist, it will return UNDEFINED


// ADDING ELEMENTS 

/*

    Using the .push() method we can add elements to an array

    .push() method, the new value is stored at the end of the array 

    .unshift() method adds an element at the beginning of the array 

 */

// .push() method

const arr4 = [1, 2, 3, 4];

arr4.push(5);
console.log(arr4[4]); // ==> 5

// .unshift() method 

arr4.unshift(10);
console.log(arr4[0]); // ==> 10

console.log(arr4);


// REMOVING ELEMENTS 

/*

    .splice() will allow us to delete an element from an array 

    array.splice(start, deleteCount)
    Start: Index at which to start changing the array 
    DeleteCount: number of old array elements to remove 

*/

arr4.splice(0, 1);
console.log(arr4[0]) // will be 1 and not 10 because 10 is will be removed 
console.log(arr4)


// SUMMARY OF METHODS

/*

    .push() ==> Adds an element at the end 

    .unshift() ==> Adds an element at the beginning 

    .shift() ==> Removes the first element 

    .pop() ==> Removes the last element 

    .splice() ==> Removes elements from anywhere in the array 

*/


// ITERATING OVER EACH ELEMENT IN AN ARRAY 

const arr5 = ['Tony', 'Lasso', 'Nick', 'Kory'];

for(let i = 0; i < arr5.length; i++) {
    console.log(arr5[i]);
};


// FOR EACH METHOD 
/*
    .forEach() method iterates through all the elements of an array and FOR EACH element in the array it will call another function, passing in it each element, one by one. 

    forEach receives only one parameter: a function, which can contain zero or multiple parameters 
*/

arr5.forEach(function(name){
    console.log(name);
})

arr5.forEach(name => console.log(name)); // cleaner using arrow function 

        // No parameters

['a', 'b'].forEach(function() {
    console.log('hi')               // ES5
})

        // First parameter

let arr6 = [1, 2, 3, 4];

arr6.forEach(function(element) {
    console.log(element * 2);
})

arr6.forEach(element => console.log(element * 3));

        // Second paramete

const raceResults = ['Helen', 'John', 'Peter', 'Merry'];
raceResults.forEach(function(element, index) {
    console.log(`${element} finished the race in ${index + 1}th position!`)
})

raceResults.forEach((elem, index) => console.log(`${elem} finished the race in ${index + 1}th position!`))


// STRING .SPLIT() METHOD

/*

    The .split() method allows us to separate a string into pieces and will return all the pieces as elements of a new array 

*/

let phrase = "This is long enough for a string to count its words";

let words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);

// SUMMARY
/*
    Arrays are data structures that allow us to store a collection of elements, doesn’t matter the type. We can manipulate arrays, getting, changing, adding or deleting their elements.

    We also have several ways to go through all of their values, like loops such us for, or methods like forEach.
*/