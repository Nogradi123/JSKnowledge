/*

    .map(), .filter(), and .reduce() methods DO NOT modify the original array, that is - they don't mutate the original array but rather create a new array

*/


// **** .MAP() METHOD ****

/*
 
    .map() is very similar to forEach, except for one important distiction:
        - the .forEach() method doesn't actually return anything (undefined). It simply calls a provided function on each element in your array. If you want to make some changed in the array you're iterating over your original array will be mutated

        - The .map() method will also call a provided function on every element in the array. The difference is that .map() utilizes return values and actually returns a new array of the same size 

        - .map() you have to return a value out or else your new array will be filled with a bunch of undefineds

*/


// EXAMPLES
const array = [1, 2, 3];

const newArray = array.map(function(num) {
    return num * 2;
})

console.log(newArray);


const foods = ['pizza', 'sandwiches', 'chicken'];

const capFoods = foods.map(food => food.toUpperCase());

console.log(capFoods);


// PRACTICE 1

// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

const capCities = cities.map(function (city) {
   return city.charAt(0).toUpperCase() + city.slice(1)
})

console.log(capCities)

// PRACTICE 2
const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];

const finalGrade = students.map(function (student) {
    const projectAverage = (student.firstProject + student.secondProject) / 2;
    const finalGrade = student.finalExam * 0.6 + projectAverage * 0.4
    return {
        name: student.name,
        finalGrade: Math.round(finalGrade)
    }
})

console.log(finalGrade);


