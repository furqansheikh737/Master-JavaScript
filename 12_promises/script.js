const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
//   console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    // console.log("Async task 2 complete")
})

const promiseThree = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        resolve({name: 'furqan', email: 'chai@example.com'})
    }, 1000)
})

promiseThree.then(function(user){
//   console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({user: 'hamza', email: 'hamza@gmail.com'})
        }else{
            // reject(console.log("something went wrong"))
        }
    }, 1000)
})

promiseFour
.then((user) => {
//   return console.log(user.name)
})
.then((data) => {
//   console.log(data)
})
.catch((error) => {
//   console.log(error)
})
.finally(() => {
//  console.log("The promise is either resolve or rejected")
})

const promiseFive = new Promise((resolve, reject) => {
   setTimeout(() => {
    let error = true
    if(!error) {
        resolve({username: "javaScript", password: "12345"})
    }else{
        reject("Error: JS went wrong")
    }
   }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        // console.log(response)
    } catch (error) {
        // console.log(error)
    }
}

consumePromiseFive()

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }

// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users/10")
.then((response) => {
       return response.json()
})
.then((data) => {
console.log(data)
})
.catch((error) => {
    console.log(error)
})