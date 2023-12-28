var currentPlayer = "X";
var playedIndexes = ["", "", "", "", "", "", "", "", ""]

function addStep(index) {
    buttons = document.querySelectorAll('button');


    if (buttons[index].textContent === "") {
        buttons[index].innerHTML = currentPlayer;
        playedIndexes[index] = currentPlayer;

        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }

        gameStatus = document.getElementById("player-torn");
        gameStatus.innerHTML = currentPlayer + " 's torn";

        if (isWin()) {
            disableButtons();
            if (currentPlayer === "X") {
                gameStatus.innerHTML = "o Won!";
            } else {
                gameStatus.innerHTML = "X Won!";
            }

        }

        if (isDraw()) {
            disableButtons();
            gameStatus.innerHTML = "Draw";
        }

    }


}

function isWin() {
    if (playedIndexes[0] === playedIndexes[1] && playedIndexes[0] === playedIndexes[2] && playedIndexes[0] !== "")
        return true;
    if (playedIndexes[0] === playedIndexes[3] && playedIndexes[0] === playedIndexes[6] && playedIndexes[0] !== "")
        return true;
    if (playedIndexes[0] === playedIndexes[4] && playedIndexes[0] === playedIndexes[8] && playedIndexes[0] !== "")
        return true;
    if (playedIndexes[1] === playedIndexes[4] && playedIndexes[1] === playedIndexes[7] && playedIndexes[1] !== "")
        return true;
    if (playedIndexes[2] === playedIndexes[5] && playedIndexes[2] === playedIndexes[8] && playedIndexes[2] !== "")
        return true;
    if (playedIndexes[2] === playedIndexes[4] && playedIndexes[2] === playedIndexes[6] && playedIndexes[2] !== "")
        return true;
    if (playedIndexes[3] === playedIndexes[4] && playedIndexes[3] === playedIndexes[5] && playedIndexes[3] !== "")
        return true;
    if (playedIndexes[6] === playedIndexes[7] && playedIndexes[6] === playedIndexes[8] && playedIndexes[6] !== "")
        return true;

    return false;
}

function isDraw() {
    let counter = 0;
    for (let i = 0; i < playedIndexes.length; i++) {
        if (playedIndexes[i] !== "")
            counter++;
    }
    return counter === playedIndexes.length;
}

function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById("play-again-button").disabled = false;
}

