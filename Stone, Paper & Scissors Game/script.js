let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScoreVal = document.querySelector(".user-score");
let compScoreVal = document.querySelector(".comp-score");




let compChoiceGene = () => {
    const option = ["rock", "papaer", "scissors"];
    const ramdIdx = Math.floor(Math.random() *3);
    return option[ramdIdx];   
}

const draw = () => {
    msg.innerText = "Draw game. Play again"
    msg.style.backgroundColor = "black"
    
}

const showWinner = (winnerUser, userChoice, compChoice) => {
   if(winnerUser){
    userScore++
    userScoreVal.innerText = userScore
    msg.innerText = `You win. your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"
   }else{
    compScore++
    compScoreVal.innerText = compScore
    msg.innerText = `You lost. ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "red";
   }
}

let playGame = (userChoice) => {
  console.log(`user choice ${userChoice}`)
  // generate comp choice
  let compChoice = compChoiceGene();
  console.log(`copmp choice ${compChoice}`)

  if(userChoice === compChoice){
     // game will be draw
    draw();
  }else{
    let winnerUser = true;
    if(userChoice === "rock"){
        // paper, scissors
        winnerUser = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
       // rock, scissors
       winnerUser = compChoice === "scissors" ? false : true; 
    }else{
      // rock, paper
      winnerUser = compChoice === "rock" ? false : true;
    }
    showWinner(winnerUser, userChoice, compChoice);
  }

}



choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice)
   });
});