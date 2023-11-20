// Variables In JavaScript:

// variable are container of data

// var : Variable can be re-declared & updated. A global scope variable.

// let : Variable cannot be re-declared but can be updated. A block scope variable.

// const : Variable cannot be re-declared or updated. A block scope variable.

let firstName = "Furqan";
console.log(firstName);

const PI = 3.142;
console.log(PI);

{
    let a = 35;
    console.log(a);
}
{
    let a = 87;
    console.log(a);
}


// Data Types In JavaScript:

// Primitive
// Number, String, Boolean, Undefined, Null, Bigint, Sumbol

// Non Primitive
// Objects =>(collection of values).



// Let's Practice

//Q1. Create a const object called "product" to store information show in the picture.

const product = {
    title: "Ball pen",
    rating: 7,
    offer: 5,
    price: 285,
};

//Q2. Create a const object called "profile" to store information shown in the picture.

const profile = {
    username: "furqan6616",
    followers: 5000,
    following: 5,
    isFollow: true,
    bio: "Software Engineering"
}