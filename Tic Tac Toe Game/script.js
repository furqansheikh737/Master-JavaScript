let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetGame");
let newGameButton = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".winner");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("first");
        if (turnO) {
            box.innerText = "O";
            turnO = false
        } else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true;

        checkWinner()
    });
});

const enabledBoxes = () => {
    for(box of boxes){
        box.disabled = false
        box.innerText = ""
    }
};

const disabledBoxes = () => {
    for(box of boxes){
        box.disabled = true
    }
};

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

const newGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

const showWinner = (winner) => {
    msg.innerText = `Conratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide")
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                disabledBoxes()
                showWinner(pos1Value)
            }
        }

    }
};

newGameButton.addEventListener("click", newGame);
resetButton.addEventListener("click", resetGame);