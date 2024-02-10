//                           *************************Scope*************************

// var c = 30
let a = 300

if (true) {
    let a = 20;
    const b = 30;
    // console.log("INNER: ", a)
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    let username = "Furqan";

    function two() {
        let city = "Karachi"
        console.log(username);
    }

    // console.log(city)

    two()

}

// one()

if (true) {
    let username = "Hamza"
    if (username === "Hamza") {
        let website = "youtube"
        //    console.log(username)
    }
    //    console.log(website)
}
// console.log(username)



//                                      *************************Hoisting*************************


// console.log(addone(6))

function addone(val) {
    return val + 1
}


// addtwo(7)
const addtwo = function (val) {
    return val + 2
}

//                                      *************************This keyword*************************

// This : this keyword hamein current context k bare ma bata hai

const user = {
    name: "furqan",
    age: 22,
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.name} , welcome to our website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.name = "shahzaib"
// user.welcomeMessage()

// console.log(this)

//                                      not working this kerword in functions

// function chai(){
//    let username = "furqan"
//    console.log(this.username)
// }

const chai = () => {
    let username = "furqan"
    console.log(this.username)
}

// chai()


//                                     *****************Immediately Invoked Function Expression (IIFE)*****************

// global execution k polution se problem hoti hai kai bar tw aus global scope k variables ya jo jo execution hai aus se bachne k liye hum IIFE ka use krte hen


// named IIFE
(function code() {
    console.log("DB Connected");
})();


// simple IIFE
((name) => {
    console.log(`DB Connected Two ${name}`);
})("furqan")