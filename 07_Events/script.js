//                                                                       Event Hnadler

let btn = document.querySelector(".btn");
// btn.onclick = () => {
//     console.log("Button was clicked");
//     let a = 23;
//     a++
//     console.log(a)
// }

// let box = document.querySelector(".box");
// box.onmouseover = () => {
//     console.log("You are inside div");
// }

//                                                                        Event Object 
// (It is a special object that has details about the event.)
// (All event handlers have access to the Event Object's properties and methods.)


// btn.onclick = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX);
//    console.log(e.clientY);
// }


//                                                                        Event Listeners


// let handler3 = () => {
//     console.log("button was clicked - handler3")
// } 

// btn.addEventListener("click", () => {
//     console.log("button was clicked - handler1")
// });

// btn.addEventListener("click", () => {
//     console.log("button was clicked - handler2")
// });

// btn.addEventListener("click", handler3 );

// btn.addEventListener("click", () => {
//     console.log("button was clicked - handler4")
// });

// btn.removeEventListener("click", handler3)

//                                                                      Paractice Quection

// Q1

let modeBtn = document.querySelector(".mode");
let mode = "light"
let body = document.querySelector("body")

modeBtn.addEventListener("click", () => {
    if(mode === "light"){
        mode = "dark"
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        mode = "light"
        body.classList.add("light");
        body.classList.remove("dark");

    }
    
    console.log(mode)
})