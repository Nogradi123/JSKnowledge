// Iteration 1: Names and Inputs 

let hacker1 = 'Nick'
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Tony';
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals 

if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`)
}
else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}



// Iteration 3: Loops 

// 3.1
let result = ''
for(let value of hacker1) {
    result += value.toUpperCase() + ' '
}

console.log(result) // N I C K 

// 3.2
let expectedResult = '';
for(let i = hacker1.length - 1; i >= 0; i--) {
    expectedResult += hacker1[i]
}
console.log(expectedResult) // kciN 

let reverseHacker2 = hacker2.split('').reverse().join(''); // Better solution and cleaner
console.log(reverseHacker2) // ynoT

// 3.3
do {
    if(hacker1 > hacker2){
        console.log(`The driver's name goes first`)
    } else if (hacker2 > hacker1) {
        console.log(`Yo, the navigator goes first, definitely`)
    } else {
        console.log('What?! You both have the same name?');
    }
    break;
} while (hacker1 !== hacker2)



// BONUS

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lobortis enim. Pellentesque semper, felis at suscipit feugiat, justo sapien consectetur nibh, tempus consequat sem massa in dui. Phasellus dictum efficitur ante vel tristique. Mauris porta massa nibh, vitae vestibulum metus efficitur eu. Pellentesque laoreet ultrices mi nec mollis. Etiam id lorem imperdiet, scelerisque urna vel, malesuada ipsum. Vivamus aliquet convallis magna vitae interdum. Nullam sit amet neque tortor.

Aenean vel enim magna. Curabitur non nibh dolor. Praesent nec dapibus tellus. Fusce scelerisque libero elit, quis consectetur augue pretium a. Phasellus laoreet, tellus at auctor luctus, felis enim pretium erat, et scelerisque arcu justo eu lacus. Vestibulum at nisi gravida ipsum scelerisque luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec dignissim imperdiet libero eget condimentum. Pellentesque metus sapien, porttitor vitae feugiat vitae, sagittis id mi. Ut at erat libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non nunc cursus, aliquet velit id, sollicitudin leo.

Curabitur eget pulvinar tortor. Vestibulum fringilla fringilla est, eu laoreet diam tincidunt vitae. Vestibulum nulla nibh, dignissim quis pretium sit amet, molestie at purus. Vivamus magna felis, consequat in pellentesque mattis, volutpat in sem. Proin vitae congue risus, sed dapibus orci. Curabitur non mattis dui, dapibus pharetra libero. Cras a dignissim nibh.`

let numOfWords = 0;
let numOfET = 0;

let newArr = []
newArr.push(longText.split(' '));

for(let i = 0; i < newArr.length; i++) {
   numOfWords += newArr[i].length;
   
}

console.log(numOfWords, numOfET);

// console.log(numOfWords += longText.split(' ').length); CLEANER SOLUTION