let a = document.querySelector("li");
a.innerHTML = "<i>apple</i>"

let heading = document.querySelector("h1");
heading.innerText = "new Heading"

// Q2. Create a H2 heading elemnt with text - "Hello JavaScript". Append "from Apna College student" to this text using JS.

let h2 = document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College student";
h2.style.backgroundColor = "purple";
h2.style.color = "white"


// Q2. 

let box = document.querySelectorAll(".Box");

// box[0].innerText = "Welcome to my youtube channel 1";
// box[1].innerText = "Welcome to my youtube channel 2";
// box[2].innerText = "Welcome to my youtube channel 3";

let idx = 1
for(div of box){
    div.innerText = `Welcome to my youtube channel ${idx}`;
    idx++
}
