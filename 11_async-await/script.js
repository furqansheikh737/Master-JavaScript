// setInterval
// setTimeout
// clearInterval
// clearTimeout

const textChange = () => {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "The Best Js Series"
}

// const changeMe = setTimeout(textChange, 2000);

// let btn = document.querySelector(".stop");
// btn.addEventListener("click", () => {
//     clearTimeout(changeMe) ;
//     console.log("stoped")
// })


// const sayDate = (str) => {
//     console.log(str, Date.now())
// }

// let clear
// document.querySelector(".start").addEventListener("click", () => {
//     clear = setInterval(sayDate, 1000, "Furqan")
// })

// document.querySelector(".stop").addEventListener("click", () => {
//     clearInterval(clear)
//     console.log("stop")
// })


// generate a random color

// const randomColor = () => {
//     let hex = '0123456789ABCDEF'
//     let color = "#"
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color
// }
//     let intervalId;
// const startChangingColor = () => {
//     if(!intervalId){
//         intervalId = setInterval(changeBgColor, 1000);
//     }

//     function changeBgColor() {
//         document.body.style.backgroundColor = randomColor()
//     }
// }

// const stopChangingColor = () => {
//     clearInterval(intervalId)
//     intervalId= null

// }

// document.querySelector(".start").addEventListener("click", startChangingColor)

// document.querySelector(".stop").addEventListener("click", stopChangingColor)

// Press the key and watch magic......

const insert = document.querySelector(".insert")

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
     <div class="color">
      <table>
      <tr>
      <th>key</th>
      <th>key code</th>
      <th>code</th>
      </tr>
      <tr>
      <td>${e.key === " " ? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      </tr>
      </table>
     </div>
  `
})