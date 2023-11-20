//                                                    Arthimatic Operators

// let a = 5;
// let b = 3;

// console.log("a = ", a, "& b = ", b)
// console.log("a + b =", a + b);  //addition
// console.log("a - b =", a - b);  //substraction
// console.log("a * b =", a * b);  //multiplication
// console.log("a / b =", a / b);  //divition
// console.log("a % b =", a % b);  //modulus
// console.log("a ** b =", a ** b);  //exponentiation


//                                                         Unary Operator

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

// console.log("++a = ", ++a);  //increment
// console.log(a);

// console.log("a++ = ", a++);  //increment
// console.log(a);

// console.log("--a = ", --a);  //decrement
// console.log(a);

// console.log("a-- = ", a--);  //decrement
// console.log(a);


//                                                         Assignment Operators

// let a = 5;
// let b = 2;

// a += 4; // a = a + 4 = 9
// a **= 4 // a = a ** 4 = 625


//                                                           Comparison Oprators

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);

// console.log("a == b", a == b);
// console.log("a != b", a != b);

// let c = 5;
// let d = "5";

// console.log("c = ", c, "& d = ", d);

// console.log("c === d", c === d);
// console.log("c !== d", c !== d);

// console.log("5 < 2", a < b);
// console.log("5 > 2", a > b);
// console.log("5 <= 5", c <= d);
// console.log("5 >= 5", c >= d);


//                                                              Logical Oprators
// let a = 6;
// let b = 5;

// console.log("cond1 && cond2", a > b && a === 6)  // && : ye oprator dekhta hai k koi bhi aik condition false hui tw result false hoga baqi true.

// console.log("cond1 || cond2", a > b || a === 4)  // && : ye oprator dekhta hai k koi bhi aik condition true hui tw result true hoga baqi false.

// console.log("cond1 ! cond2", !(a === 6))  // && : ye oprator true value false or false value ko true kr deta hai.


//                                                            Conditional Statement

// let mode = "orange";
// let color; 

// if(mode === "dark"){
//     color = "black";
// }else if(mode === "red"){
//     color = "red";
// }else if(mode === "yellow"){
//     color = "yellow";
// }else{
//     color = "white";
// }
// console.log(color);


//                                                               ternary Operators

// age = 17

// age > 18? console.log("Allow") : console.log("Not Allow")


//                                                                Let's Practice
// Q1. Get user to input a number using prompt("Enter a number;") Check if the number is a multiple of 5 or not.

// let userInput = prompt("Enter a number:")

// if(userInput % 5 === 0){
//    alert(`${userInput} is a multiple of 5`)
// }else{
//     alert(`${userInput} is not a multiple of 5`)
// }

// Q2. Write a code can give grades to students according to their scores.


let input = prompt("Enter a percentage");

if(input <= 100 && input >= 80){
   alert("Your grade A")
}else if(input <= 79 && input >= 70){
    alert("Your grade B")
}else if(input <= 69 && input >= 60){
    alert("Your grade C")
}else if(input <= 59 && input >= 50){
    alert("Your grade D")
}else if(input <= 49 && input >= 0){
    alert("Your grade F")
}


