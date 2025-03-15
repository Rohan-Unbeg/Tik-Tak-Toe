const boxes = document.querySelectorAll(".box");
const result = document.querySelector("#result");

const boardState = ["X", "O", null];

let currentPlayer = "X";
let gameOver = false;

const winningPattern = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Other diagonal
];

function GameLogic() {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.textContent === "" && gameOver === false) {
                box.textContent = currentPlayer;

                if (box.textContent === 'X') {
                    box.style.color = '#ff4f4f';
                } else {
                    box.style.color = '#4f7fff';
                }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
            checkWin();
        });
    });
}

function checkWin() {
    winningPattern.forEach((arr, i) => {
        let [one, two, three] = arr;

        let val1 = boxes[one].textContent;
        let val2 = boxes[two].textContent;
        let val3 = boxes[three].textContent;

        if (val1 && val1 === val2 && val2 === val3) {
            boxes[one].style.backgroundColor = "#cfc7ff";
            boxes[two].style.backgroundColor = "#cfc7ff";
            boxes[three].style.backgroundColor = "#cfc7ff";
            result.textContent = `Game Over! Winner is ${val1}`;
            gameOver = true;
            return;
        }
    });
    if ([...boxes].every((box) => box.textContent != "")) {
        result.textContent = "Its a Draw!";
    }
}

function restartGame() {
    boxes.forEach((box) => {
        box.textContent = "";
        box.style.backgroundColor = ""; 
    });
    result.textContent = ''
    currentPlayer = 'X'
    gameOver = false

}

GameLogic();
