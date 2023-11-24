//                                                                 Arrays (collection of itrems)

// string => immutable hoti hai
// array => mutable hota hai

// let marks = [98, 72, 83, 91, 90, 66];
// console.log(marks);

// let friends = ["shahzaib", "hamza", "waqar", "faraz", "ali", "moiz"];
// console.log(friends);

// let friendInfo = ["asad", 22, "computer Science", "karachi"];
// console.log(friendInfo);

//                                                                        Looping Array

// let friends = ["shahzaib", "hamza", "waqar", "faraz", "ali", "moiz"];

// for(let i=0; i<friends.length; i++){
//     console.log(friends[i])
// }

// let cities = ["karachi", "hydrabad", "lahore", "islamabad"];
// for(let city of cities){
//    console.log(city.toUpperCase());
// };

//                                                                          Practice questions

// Q1.
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//    sum = sum + val
// }

// let avg = sum / marks.length;
// console.log(`average marks of the class is ${avg}`)

// // Q2.

// let items = [250, 645, 300, 900, 50];

// for(let i=0; i<items.length; i++){
//    let offer = items[i] / 10;
//    items[i] -= offer;
// }
// console.log(items);

//                                                                         Arrays Methods

// push()       // add to end
// pop()        // delete from end and return
// toString()   // convert array to string
// concat()     // join multiple array and return
// unshift()    // add to start
// shift()      // delete from start and return
// slice()      // return the piece of the array
// slice(startIdx, endIdx)
// splice()     // change original array (add, remove, replace)
// splice(startIdx, deleteCount, newElement)

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.push("peach", "litchi"));

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.pop());

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.toString());

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// let vagitable = ["tomato", "potato", "onion"];
// let foodItems = furites.concat(vagitable);
// console.log(foodItems);

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.unshift("litchi"));

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.shift());

// let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.slice(2, 4));

// let furites = ["apple", "banana", "mango", "graphs", "orange"];

// Add Element
// furites.splice(2, 0, "potato");

// Delete Element
// furites.splice(2, 1);

// Replace Element
// furites.splice(2, 1, "litche");

// furites.splice(2);   // splice is senerio ma index 2 k bad se sare value ko delete kr deta hai.


// Q1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// a) Remove the first company from the array

// console.log(companies.shift());

// b) Remove Uber & add Ola in its place

// console.log(companies.splice(2, 1, "Ola"));

// c) Add Amazon at the end

// console.log(companies.push("Amazon"));



