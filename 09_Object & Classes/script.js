// //                                                           Objects

// // A javaScript oject is an entity having state and behavior (properties and method).

// // JavaScript object have a special called prototype.

// // We can set prototype using __proto__

// // this keyword excess krta hai apne nearest object ki property ko

const student = {
    name: "Furqan Sheikh",
    marks: 78,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

// // jab bhi koi object ya array banta hai tw prototype k general method ya properties hen wo by default inherit ho kr ajate hen.

const employee = {
    caltax() {
        console.log("tax rate in 10%")
    }
}

const osama = {
    salary: 5000,
};

// // if object & prototype have same method, object,s method will be used.
const osama2 = {
    salary: 3000,
    caltax() {
        console.log("tax rate in 30%")
    }
};

const osama3 = {
    salary: 4000,
};

const osama4 = {
    salary: 6000,
};
// osama.__proto__ = employee;
// osama2.__proto__ = employee;
// osama3.__proto__ = employee;
// osama4.__proto__ = employee;

//                                                            Object from Hitesh

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["location"])
// console.log(JsUser[mySym])
// console.log(JsUser["full name"])


JsUser.greeting = function(){
  // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
  // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "furqan",
tinderUser.email = "furqan@gmail"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const currentUser = {
  email: "furqan@gmail.com",
  fullName: {
    firstname: "Furqan",
    lastname: "Sheikh"
  },
  EmployeeId: 234
}

// console.log(currentUser.fullName.firstname)

let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "c", 4: "d"};
let obj3 = {5: "e", 6: "f"};
let obj5 = {7: "e", 8: "f"};


// let obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

let obj4 = {...obj1, ...obj2,...obj3, ...obj5}
// console.log(obj4)

const user = [
  {
    id: 1,
    name: "Furqan"
  },
  {
    id: 2,
    name: "Burhan"
  },
  {
    id: 3,
    name: "Taha"
  },
  {
    id: 4,
    name: "Owais"
  },
]
 
// console.log(user[1].name)
// console.log(user[0].name)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnPisroperty("isLoggedIn"))

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

// const {courseInstructor: teacher} = course

// console.log(teacher)

// JSON pormat
  // {
  //     "name": "hitesh",
  //     "coursename": "js in hindi",
  //     "price": "free"
  // }
  
// [
//   {},
//   {},
//   {},
// ]

// //                                                        Classes

// // Classes is a program-code template for creating objects.

// // Those object will have some state (variables) & some behavior (functions) inside it.

// class ToyotaCar {
//     // Object ko initialize karate waqt hamein koi kam karana hota hai tw hum construct k through karate hen 
//     constructor(brand, mileage) {
//         // console.log("creating new object")
//         this.brandName = brand
//         this.mileage = mileage
//     }

//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let corola = new ToyotaCar("Toyota", 20);// jab bhi new object bane ga tab constructor call hoga
// // console.log(corola)
// // fortuner.setBrand("KIA")
// let civic = new ToyotaCar("honda", 35);//jab bhi new object bane ga tab constructor call hoga
// // console.log(civic)
// // honda.setBrand("lexus")


// //                                                              Inheritance

// // Inheritance is passing down properties & methods from parent class to child class.

// // Example 1
// class Parent {
//     hello() {
//         console.log("Hello bahi")
//     }
// }

// class Child extends Parent { }

// let obj = new Child();


// // Example 2
// class Person {
//     constructor(){
//         this.species = "homo sapiens"
//     }

//     eat(){
//         console.log("eat")
//     }

//     sleep(){
//         console.log("sleep")
//     }

//         // if child & parent have same method, child's method will be used. [Method Overriding]
//     work(){
//         console.log("do nothing")
//     }
// }

// class Engineer extends Person{
//         // if child & parent have same method, child's method will be used. [Method Overriding]
//     work(){
//         console.log("solve problem, build somethings")
//     }
// }

// class Doctor extends Person{
//         // if child & parent have same method, child's method will be used. [Method Overriding]
//     work(){
//         console.log("treat patients")
//     }
// }

// let furqan = new Engineer();

// // Example 3
// class Persons {
//     constructor(name){
//         console.log("call parent constructor")
//         this.species = "homo sapiens"
//         this.name = name;
//     }

//     eat(){
//         console.log("eat")
//     }
// }

// class Engineers extends Persons{
//     constructor(name){
//         console.log("call child constructor")
//         super(name) // to invoke parent class constructor
//     //    this.branch = branch;
//        console.log("exit child constructor")
//     }

//     work(){
//         super.eat();
//         console.log("solve problem, build somethings")
//     }
// }

// // let burhan = new Engineers("chemical engineer");
// let burhan = new Engineers("shahzaib");


// //                                                    Practice questions
// // Q1) You are creating a website for your collage. Create a class User with 2 properties, name & email. It also has a method called viewDara() that allow user to view website data.

// let data = "secret information"
// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email
//     }

//     viewData(){
//         console.log(`data = ${data}`);
//     }
// }

// let student1 = new User("furqan", "email@.125com")
// let student2 = new User("hamza", "email@123.com")
// let teacher1 = new User("burhan", "email@124.com")

// // Q2) Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

// let DATA = "secret information"
// class User1 {
//     constructor(name, email){
//         this.name = name;
//         this.email = email
//     }

//     viewData(){
//         console.log(`data = ${DATA}`);
//     }
// }

// class Admin extends User1 {
//     constructor(name, email){
//      super(name, email)
//     }

//     editData(){
//       DATA = "update secret information"  
//     }
// }

// let admin = new Admin("Admin", "admin@admin.com");

// Q3) Address Book: Create an address book where each entry contains a person's name, address, and phone number. Implement functions to add new entries, delete entries, and search for a specific person's information.

// Define the AddressBook constructor function
// function AddressBook() {
//     this.entries = [];
//   }
  
//   // Define the Entry constructor function
//   function Entry(name, address, phoneNumber) {
//     this.name = name;
//     this.address = address;
//     this.phoneNumber = phoneNumber;
//   }
  
//   // Add a method to AddressBook to add a new entry
//   AddressBook.prototype.addEntry = function(name, address, phoneNumber) {
//     var newEntry = new Entry(name, address, phoneNumber);
//     this.entries.push(newEntry);
//   };
  
//   // Add a method to AddressBook to delete an entry by name
//   AddressBook.prototype.deleteEntry = function(name) {
//     this.entries = this.entries.filter(function(entry) {
//       return entry.name !== name;
//     });
//   };
  
//   // Add a method to AddressBook to search for an entry by name
//   AddressBook.prototype.searchEntry = function(name) {
//     var foundEntry = this.entries.find(function(entry) {
//       return entry.name === name;
//     });
//     return foundEntry || "Entry not found";
//   };
  
//   // Example usage
//   var myAddressBook = new AddressBook();
//   myAddressBook.addEntry("John Doe", "123 Main St", "555-1234");
//   myAddressBook.addEntry("Jane Smith", "456 Elm St", "555-5678");
//   console.log(myAddressBook.entries);
  
//   myAddressBook.deleteEntry("John Doe");
//   console.log(myAddressBook.entries);
  
//   console.log(myAddressBook.searchEntry("Jane Smith"));
//   console.log(myAddressBook.searchEntry("John Doe"));