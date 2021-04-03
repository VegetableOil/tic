let main = document.getElementById('main');
let tileArray = [];
let tileValue;
let whoHasWon = document.getElementById('whoWon');
let resetBtn = document.getElementById('resetBtn');

function addDivsToMain() {
    for (let i = 0; i < 9; i++) {
        tileArray[i] = document.createElement('div');
        main.appendChild(tileArray[i]);
    }
}

function changeValue(value = 'X') {
    for (let i = 0; i < 9; i++) {
        tileArray[i].addEventListener('click', () => {
            if (tileArray[i].textContent == 'X' || tileArray[i].textContent == 'O') {
                return;
            } else if (value == 'O') {
                tileArray[i].textContent = 'O';
                checkWinner(value);
                value = 'X';
            } else {
                tileArray[i].textContent = 'X';
                checkWinner(value);
                value = 'O';
            }
        });
    }
}

function checkWinner(value) {
    if (tileArray[0].textContent == value && tileArray[1].textContent == value && tileArray[2].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[3].textContent == value && tileArray[4].textContent == value && tileArray[5].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[6].textContent == value && tileArray[7].textContent == value && tileArray[8].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[0].textContent == value && tileArray[3].textContent == value && tileArray[6].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[1].textContent == value && tileArray[4].textContent == value && tileArray[7].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[2].textContent == value && tileArray[5].textContent == value && tileArray[8].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[0].textContent == value && tileArray[4].textContent == value && tileArray[8].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    } else if (tileArray[2].textContent == value && tileArray[4].textContent == value && tileArray[6].textContent == value) {
        whoHasWon.textContent = `${value} has won!`;
    }
}

resetBtn.addEventListener('click', () => {
    resetBoard();
});


function resetBoard() {
    tileArray.forEach(tile => {
        tile.textContent = '';
    });
    whoHasWon.textContent = 'Who will win?';
    changeValue();
}

addDivsToMain();
changeValue();