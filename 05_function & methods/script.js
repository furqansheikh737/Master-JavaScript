//                                                          Functions
// Block od code that performs a specific task, can be invoked whenever needed.

// function myFunction(){
//    console.log("Welcom to coding industry");
// }

// myFunction();
// myFunction();

// function myFunction(msg){  // parameter
//    console.log(msg);
// }

// myFunction("My name is Furqan"); // argument

// sum function
// function sum(a, b){
//    return a + b;
// }
// sum(4, 5);

// const sumArrow = (a, b) => {
//     return a + b;
// }
// sumArrow(19, 1);

// multiplication function
// function mul(a, b){
//     return a * b;
// }
// mul(2,6);

// const mulArrow = () => {
//     return a * b;
// }
// mulArrow(33, 7);

//                                                                Function with Hitesh

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2

}
let result = addTwoNumber(8, 30);
// console.log(result)

function loginUserMessage(user){
    if (!user) {
        console.log("please bhai ap phele login ho kr ayen")
        return
    }
    return `${user} just logged in`
}

// console.log(loginUserMessage("Waqar"))
// console.log(loginUserMessage())

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(500, 2000, 4000))

const userInfo = {
    id: 1,
    name: "Hashir",
    email: "hashir@gmail"
}

function info(anyObj) {
    return `The user name is ${anyObj.name} & email is ${anyObj.email}`
}

// console.log(info(userInfo));

const  person = ["John", "Doe", "Jane"];

function fullName(getName) {
      return getName[1]
}

console.log(fullName(person));
//                                                                Practice Question

// Q1. Create a function using the "function keyword that takes a String as an argument & return the number of vowels in the string.

// function vowel(str) {
// let count = 0
//     for (let val of str) {
//         if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
//             count++
//         };
//     };
//     console.log(count)

// };

// vowel(`${prompt("enter a words")}`);

// Q2. Create same task from arrow function.

// const vowelCount = (str) => {
//     let count = 0
//     for (let val of str) {
//         if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
//             count++
//         };
//     };
//     console.log(count)

// }

//                                                                ForEach Function
// arr.forEach(callBackFunction)
// CallbackFunction : Here, it is a function to execute for each element in thr array.
// *A callback is a function passed as an argument to anthor function*.

// let cities = ["karachi", "lahore", "islamabad", "multan"];

// cities.forEach((val) => {
//     console.log(val.toUpperCase());
// });

//                                                               Interview Question
// Higher order function: Higher order function wo function hote hen jo dosre function ko as a parameter lelete hen ya function ko return krdete hen. Example : forEach function

//                                                               Paractice Question

// Q1. For a given array of number, print the square of each value using the forEach loop.

// let num = [2, 3, 5, 6];

// num.forEach((val) => {
//     // console.log(val ** 2);
//     console.log(val * val);

// });


//                                                                     Map Function

let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// nums.map((num) => {
//     console.log(num);
// })

// let newNum = nums.map((num) => {  
//     return num ** 2;
// })
// console.log(newNum);

// let newNum = nums
//               .map((num) => num * 2)
//               .map((num) => num + 2)

// console.log(newNum)

//                                                             Filter Function

// Filter : Create a new array of elements that give true for a condition/filter.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = numbers.filter((val) => {
//     return val % 2 === 0
// });

// console.log(newNum);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = numbers.filter((val) => {
//     return val > 5
// });

// console.log(newNum);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = numbers.filter( (num) => num >= 7)
// console.log(newNum)

// // Q1) 

// const books = [
//     {
//         title: 'Book One',
//         genre: 'History',
//         publish: 1992
//     },
//     {
//         title: 'Book One',
//         genre: 'Islamiat',
//         publish: 2004
//     },
//     {
//         title: 'Book One',
//         genre: 'Physics',
//         publish: 1999
//     },
//     {
//         title: 'Book One',
//         genre: 'Maths',
//         publish: 2012
//     },
// ]

// let userBooks = books.filter( (book) => book.genre === 'Islamiat' && book.publish >= 2000)
// console.log(userBooks)

//                                                             Reduce Function

// Reduce : Performs some oprations & reduce the array to a single value. It return that single value.

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((prev, curr) => {
//     return prev + curr;
// });

// console.log(sum);


// let output = numbers.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

const shopingCart = [
    {
        itemname: "js course",
        price: 2000
    },
    {
        itemname: "py course",
        price: 2999
    },
    {
        itemname: "java course",
        price: 3000
    },
    {
        itemname: "dsa course",
        price: 2500
    },
]

const totalPrice = shopingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

// console.log(totalPrice)


//                                                             Practice Question

// Q1. We are given array of marks of students. filter out of the marks of student that scored 90+.

// let marks = [80, 90, 99, 45, 92, 67, 78, 95];

// let topperMarks = marks.filter((val) => {
//     return val > 90;
// })
// console.log(topperMarks);

// // Q2. 

// let n = prompt("Enter a number");

// let arr = [];

// for(let i=1; i<=n; i++){
//    arr[i-1] = i;
// }
// console.log(arr);

// let sums = arr.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(`sum = ${sums}`);


// let factorial = arr.reduce((prev, curr) => {
//     return prev * curr;
// });

// console.log(`Factorial = ${factorial}`);


