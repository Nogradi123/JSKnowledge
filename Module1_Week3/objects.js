// OBJECTS are collections of properties and each property is represented with key-value pair. The representation of an object in JavaScript is curly braces {}. 

/*

    KEY-VALUE PAIR is a set of two linked data items. 
        - The key is a string that identifies a property of an object. It typically corresponds to the name of the property you want to access
        - The keys are unique in an object; ONE KEY WILL ALWAYS HAVE JUST ONE VALUE ASSOCIATED TO IT 

        - EX: think of a dictionary where the word is the key and the value is the descritpion of the word 

    Objects are like literals meaning they can be stored in variables 
        let object = {}

*/

// OBJECT LITERAL SYNTAX

// let someObject  = {
//     key1: value1,
//     key2: value2,           // <== you need to separate the properties with a comma after or it will give you an error 
//     key3: value3
// };

// OBJECT CONSTRUCTOR SYNTAX

// let thatObject = new Object();

// PRACTICE 

let user1  = {
    name : 'Nicky',
    id: '1245'
};

let user2 = {
    name: 'Steven',
    id: '2345'
}

const book1 = {
    title: 'Rich Dad, Poor Dad',
    author: 'Robert Kiyosaki',
    isbn: '123456',
    category: 'non-fiction'
};

const book2 = {
    title: 'The Pelican Brief',
    author: 'John Grisham',
    isbn: '234567',
    category: 'fiction'
};

const book3 = { 
  title: 'To Kill a Mockingbird', 
  author: 'Harper Lee', 
  isbn: '0446310786', 
  category: 'Classic Literature' 
};

user1.books = [book1, book2];
user2.books = [book1, book2, book3]

// console.log(Object.keys(user));
// console.log(Object.values(user));

const library = [];

library.push(user1, user2);



library[0].books.push(book3);

// console.log(library[0])

library.forEach(value => {
    console.log(value.books)
})