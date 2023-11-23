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