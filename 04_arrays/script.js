//                                                                 Arrays (collection of itrems)

// string => immutable hoti hai
// array => mutable hota hai

let marks = [98, 72, 83, 91, 90, 66];
// console.log(marks);

let friends = ["shahzaib", "hamza", "waqar", "faraz", "ali", "moiz"];
// console.log(friends);

let friendInfo = ["asad", 22, "computer Science", "karachi"];
// console.log(friendInfo);

//                                                                        Looping Array

let friends1 = ["shahzaib", "hamza", "waqar", "faraz", "ali", "moiz"];

for(let i=0; i<friends.length; i++){
    // console.log(friends1[i])
}

let cities = ["karachi", "hydrabad", "lahore", "islamabad"];
for(let city of cities){
//    console.log(city.toUpperCase());
};

//                                                                          Practice questions

// Q1.
let marks1 = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let val of marks1){
   sum = sum + val
}

let avg = sum / marks1.length;
// console.log(`average marks of the class is ${avg}`)

// // Q2.

let items = [250, 645, 300, 900, 50];

for(let i=0; i<items.length; i++){
   let offer = items[i] / 10;
   items[i] -= offer;
}
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
// flat(infinity)      // array k ander bhi koi array ho tw flat aus ko aik hi array ma likh deta hai

let furites = ["apple", "banana", "mango", "graphs", "orange"];
// console.log(furites.push("peach", "litchi"));

// console.log(furites.pop());

// console.log(furites.toString());

let vagitable = ["tomato", "potato", "onion"];
let foodItems = furites.concat(vagitable);
// console.log(foodItems);

// console.log(furites.unshift("litchi"));

// console.log(furites.shift());

// console.log(furites.slice(2, 4));


// Add Element
// console.log(furites.splice(2, 0, "potato"));

// Delete Element
// console.log(furites.splice(2, 1));

// Replace Element
// console.log(furites.splice(2, 1, "litche"));

// console.log(furites.splice(2));   // splice is senerio ma index 2 k bad se sare value ko delete kr deta hai.

// flat
let another_arr = [1, 2,[2, 4], 5, 6, [1, 2, 3, 4], 7 ]
let real_another_arr = another_arr.flat(3);
// console.log(real_another_arr)


// Q1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
let anotherCompanies = ["Toyota", "Honda", "KIA", "MG", "Suzuki"]

// a) Remove the first company from the array

// console.log(companies.shift());

// b) Remove Uber & add Ola in its place

// console.log(companies.splice(2, 1, "Ola"));

// c) Add Amazon at the end

// console.log(companies.push("Amazon"));

// d) combine companies array & anotherCompanies array

// first method
// let combineArr = companies.concat(anotherCompanies)

// second method
let combineArr = [...companies, ...anotherCompanies]

// console.log(combineArr)

console.log(Array.isArray("Furqan"))
console.log(Array.from("Furqan"))
console.log(Array.from({name: "Hamza"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3))


//                                                   Practice Questions

// 1) Array Sum: Write a function to find the sum of all elements in an array of numbers.

// let sum = (arr) => {
//     let num = 0
//     arr.map((sum) => {
//         num = sum + num
//     })
//     console.log(num)
// }

// let numbers = [12, 23, 45, 56, 67, 89, 102];
// sum(numbers)

// 2) Array Average: Create a function to calculate the average of elements in an array of numbers.


// let avg = (arr) => {
//     let num = 0
//     arr.map((sum) => {
//         num = sum + num
//     })
//     let avg =  num / arr.length 
//     console.log(avg)
// }

// let numbers = [12, 23, 45, 56, 67, 89, 102];
// avg(numbers)

// 3) Largest Element: Write a function to find the largest element in an array.

// let largestElem = (arr) => {
//     if (arr.length === 0) {
//         return console.log("empty array")
//     }

//     let largestNum = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > largestNum) {
//             largestNum = arr[i]
//         }
//     }
//     return largestNum
// }
// let numbers = [12, 23, 45, 56, 67, 89, 102];
// console.log(largestElem(numbers))

// 4) Smallest Element: Create a function to find the smallest element in an array.

// let smallestElem = (arr) => {
//     if (arr.length === 0) {
//         return console.log("empty array")
//     }

//     let smallestNum = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] < smallestNum) {
//             smallestNum = arr[i]
//         }
//     }
//     return smallestNum
// }
// let numbers = [12, 23, 45, 56, 67, 89, 102];
// console.log(smallestElem(numbers))


// 5) Reverse Array: Implement a function to reverse the elements of an array without using the built-in reverse method.

// let reverseArray = (arr) => {
//     let reversedArr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         reversedArr.push(arr[i])
//     }
//     return reversedArr

// }
// let myArray = [1, 2, 3, 4, 5];
// let reversedArr = reverseArray(myArray)
// console.log(reverseArr)


// 6) Unique Elements: Write a function to return an array with only the unique elements from a given array.

// let uniqueArray = (arr) => {
//     let uniqueArr = []
//     for(i=0; i<arr.length; i++){
//        if(uniqueArr.indexOf(arr[i]) === -1){
//         uniqueArr.push(arr[i])
//        }
//     }
//     return uniqueArr
// }
// let duplicateArr = [1, 4, 2, 1, 3, 6, 2, 3, 5, 4, 5];
// let uniqueArr = uniqueArray(duplicateArr)
// console.log(uniqueArr)


// 7) Remove Duplicates: Implement a function to remove duplicate elements from an array.

// let removeDuplicates = (arr) => {
//        return arr.filter((value, index, array) => {
//             return array.indexOf(value) === index
//         })
//     }
//     let duplicateArr = [1, 4, 2, 1, 3, 6, 2, 3, 5, 4, 5];
//     let uniqueArr = removeDuplicates(duplicateArr)
//     console.log(uniqueArr)


// 8) Merge Arrays: Write a function to merge two sorted arrays into a single sorted array.

// let  mergeSortedArrays = (a, b) => {
    
//     let result = a.concat(b);
//     return result
// }
// let mergedArr1 = [1, 2, 3, 4, 5];
// let mergedArr2 = [6, 7, 8, 9, 10]

// console.log(mergeSortedArrays(mergedArr1, mergedArr2))

// 9) Rotate Array: Create a function to rotate the elements of an array to the left by a given number of positions.

// let routateArray = (arr, positions) => {
//     let n = arr.length
//     let effectiveShift = positions % n

//     return arr.slice(effectiveShift).concat(arr.slice(0, effectiveShift))
// }

// let originalArr = [1, 2, 3, 4, 5];
// let routate = routateArray(originalArr, 3)
// console.log(routate)

// 10) Array Chunking: Implement a function to split an array into smaller arrays of a specified size.

let routateArray = (arr, size) => {
        let chunkedArr = []
        for(i=0; i<arr.length; i+=size){
            chunkedArr.push(arr.slice(i, i + size))
        }
            
        return chunkedArr
    }
    
    let originalArr = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10];
    let chunkedArr = routateArray(originalArr, 4)
    // console.log(chunkedArr)