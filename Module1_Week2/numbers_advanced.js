let num = 3.5459

// Math.floor() -- rounds down
console.log(Math.floor(num));

// Math.ceil() -- rounds up
console.log(Math.ceil(num));

// Math.round() -- rounds to the nearest integer
console.log(Math.round(num));

// .toFixed(n) to round the number to n digits after the point 
    // this method returns a string make sure to parse back to number
console.log(Number(num.toFixed(2)));
console.log(+num.toFixed(1));

// Infinity
console.log(1e400);

// Math.random() -- returns a random number from 0 to 1 (including 0 but not including 1)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Math.max() && Math.min() -- returns the greatest and smallest from the arbitary number of arguments
console.log(Math.max(2, 8, -10, 0, 4)); // <== 8
console.log(Math.min(1, 2, 0, -5)); // <== -5

// Math.pow(n, power) -- returns n raised to the given power
console.log(Math.pow(2, 3)); // <== 8