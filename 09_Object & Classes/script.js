//                                                           Objects

// A javaScript oject is an entity having state and behavior (properties and method).

// JavaScript object have a special called prototype.

// We can set prototype using __proto__

// this keyword excess krta hai apne nearest object ki property ko

const student = {
    name: "Furqan Sheikh",
    marks: 78,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

// jab bhi koi object ya array banta hai tw prototype k general method ya properties hen wo by default inherit ho kr ajate hen.

const employee = {
    caltax() {
        console.log("tax rate in 10%")
    }
}

const osama = {
    salary: 5000,
};

// if object & prototype have same method, object,s method will be used.
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
osama.__proto__ = employee;
osama2.__proto__ = employee;
osama3.__proto__ = employee;
osama4.__proto__ = employee;

//                                                        Classes

// Classes is a program-code template for creating objects.

// Those object will have some state (variables) & some behavior (functions) inside it.

class ToyotaCar {
    // Object ko initialize karate waqt hamein koi kam karana hota hai tw hum construct k through karate hen 
    constructor(brand, mileage) {
        // console.log("creating new object")
        this.brandName = brand
        this.mileage = mileage
    }

    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let corola = new ToyotaCar("Toyota", 20);// jab bhi new object bane ga tab constructor call hoga
// console.log(corola)
// fortuner.setBrand("KIA")
let civic = new ToyotaCar("honda", 35);//jab bhi new object bane ga tab constructor call hoga
// console.log(civic)
// honda.setBrand("lexus")


//                                                              Inheritance

// Inheritance is passing down properties & methods from parent class to child class.

// Example 1
class Parent {
    hello() {
        console.log("Hello bahi")
    }
}

class Child extends Parent { }

let obj = new Child();


// Example 2
class Person {
    constructor(){
        this.species = "homo sapiens"
    }

    eat(){
        console.log("eat")
    }

    sleep(){
        console.log("sleep")
    }

        // if child & parent have same method, child's method will be used. [Method Overriding]
    work(){
        console.log("do nothing")
    }
}

class Engineer extends Person{
        // if child & parent have same method, child's method will be used. [Method Overriding]
    work(){
        console.log("solve problem, build somethings")
    }
}

class Doctor extends Person{
        // if child & parent have same method, child's method will be used. [Method Overriding]
    work(){
        console.log("treat patients")
    }
}

let furqan = new Engineer();

// Example 3
class Persons {
    constructor(name){
        console.log("call parent constructor")
        this.species = "homo sapiens"
        this.name = name;
    }

    eat(){
        console.log("eat")
    }
}

class Engineers extends Persons{
    constructor(name){
        console.log("call child constructor")
        super(name) // to invoke parent class constructor
    //    this.branch = branch;
       console.log("exit child constructor")
    }

    work(){
        super.eat();
        console.log("solve problem, build somethings")
    }
}

// let burhan = new Engineers("chemical engineer");
let burhan = new Engineers("shahzaib");


//                                                    Practice questions
// Q1) You are creating a website for your collage. Create a class User with 2 properties, name & email. It also has a method called viewDara() that allow user to view website data.

let data = "secret information"
class User {
    constructor(name, email){
        this.name = name;
        this.email = email
    }

    viewData(){
        console.log(`data = ${data}`);
    }
}

let student1 = new User("furqan", "email@.125com")
let student2 = new User("hamza", "email@123.com")
let teacher1 = new User("burhan", "email@124.com")

// Q2) Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

let DATA = "secret information"
class User1 {
    constructor(name, email){
        this.name = name;
        this.email = email
    }

    viewData(){
        console.log(`data = ${DATA}`);
    }
}

class Admin extends User1 {
    constructor(name, email){
     super(name, email)
    }

    editData(){
      DATA = "update secret information"  
    }
}

let admin = new Admin("Admin", "admin@admin.com");