//                                                           try catch

// Example 1
let a = 34
let b = 16

console.log("a = "+ a)
console.log("b = "+ b)
console.log("ab = "+ a*b)
try {
    console.log("a = "+ c)
} catch (error) {
    console.error
}
console.log("a+b = "+ a+b)
console.log("a/b = "+ a/b)

// Example 2

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
    }
}

// Example usage:
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero

