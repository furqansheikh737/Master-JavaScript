// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");


//                                                             For Loops

// for(initilization; stoping condition; updation){};

// for(let i = 1; i <= 10000; i++){
//     console.log("Pakistan")
// }


// calculate sum of 1 to 100

// let sum = 0;

// for(let i=1; i<=10; i++){
//     sum = sum + i;
//     console.log(sum)
// }
// console.log("sum = ",sum)


//                                                               While Loop

// let i = 1;
// while(i<=10){
//     console.log("pakistan");
//     i++;
// }


//                                                               Do-While Loop

// let i = 20
// do{
//     console.log("apna college");
//     i++;
// } while (i <= 10);


//                                                                 For-Of Loop (ye array or string pr lgta hai)

// let str = "karachi"
// let size = 0;
// for(let i of str){
//     console.log("i =", i)
//     size++;
// }
// console.log("string size =", size)

//                                                                 For-In Loop (ye object pr lgta hai)

// let student = {
//     name: "furqan",
//     cgpa: 7.5,
//     age: 22,
//     isPassed: true,
// };

// for(let i in student){
//    console.log("key =", i, "value =", student[i]);
   
// }


//                                                                             Let,s Practice

// Q1. Print all even number from 0 to 100

// for(let i=0; i<=100; i++){
//    if(i%2 === 0){            // even number
//     console.log("i =", i)
//    }
// }

// for(let i=0; i<=100; i++){
//    if(i%2 === 1){            // odd number
//     console.log("i =", i)
//    }
// }

// Q2.

// let gameNum = 33;
// let userInput = prompt("Guess the game number");

// while(gameNum != userInput){
//     prompt("You entered wrong number. Guess again");
// };

// alert("Congratulaions, you entered the right number");


//                                                               Strings

// let userName = "My name is Furqan";
// let schoolName = "Royal acadamy";
// console.log(userName);
// console.log(schoolName)

//                                                             String Length

// let str = "ApnaCollege"
// console.log(str.length);

//                                                             string Indices

// let str = "ApnaCollege"
// console.log(str[3]);  //a
// console.log(str[5]);  //o

//                                                            Template Literals

// let specialStr = `This is a Template Literals`;
// console.log(specialStr);


// let obj = {
//     item: "pen",
//     price: 20,
// }

// let product = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(product);
// console.log(typeof product);

//                                                               Escape character

// console.log("Apna\ncollege"); // \n = ye code ko next line ma lejata hai.
// console.log("Apna\tCollege"); // \t = ye code ke beech ma space create kr deta hai.

// let str = "Apna\ncollege"; //12
// console.log(str.length)

//                                                              Strings Methods (There are built-in functions to manipulate a string )

// str.toUpperCase()
// str.toLowerCase()
// str.trim() // remore whitespaces
// str.slice(start, end) // return part of string
// str1.concat(str2) // join str2 with str1
// str.replace(searchVal, newVal)
// str1.charAt(idx)

// let str1 = "abcdef";
// console.log(str1.toUpperCase());

// let str2 = "WXYZ";
// console.log(str2.toLowerCase());

// let str3 = "     pakistan zindabad       "
// console.log(str3.trim());

// let str4 = "karachi";
// console.log(str4.slice(3, 6));

// let str5 = "Apna";
// let str6 = "College";
// console.log(str5.concat(str6));

// let str7 = "hello";
// console.log(str7.replace("lo", "p"));

// let str8 = "hello";
// console.log(str8.charAt(4));

//                                                                   Let's Practice

// Q1. Prompt the user to enter their full name. Generate the username for them based on the input. Start username with @, followed by their full name and ending with the full name length?

let userInput = prompt("Enter full name with no space")
console.log(`@${userInput}${userInput.length}`)