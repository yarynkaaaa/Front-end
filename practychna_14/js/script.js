const boardSize = 5;
let gameBoard = document.getElementById("gameBoard");
let clickCount = 0;
let startTime;
let timeInterval;
let minStepsDisplay = document.getElementById("minSteps");

let clicksDisplay = document.getElementById("clicks");
let timeLeftDisplay = document.getElementById("timeLeft");
let jsonData;

function loadLightData() {
    fetch("light.json")
        .then((response) => response.json())
        .then((data) => {
            jsonData = data;
            setupGame();
        })
        .catch((error) => console.error("Помилка завантаження даних:", error));
}

function setupGame() {
    gameBoard.innerHTML = "";
    clickCount = 0;
    clearInterval(timeInterval);

    clickCount = 0;
    updateClicksDisplay();

    startTime = null;
    updateTimeDisplay();

    const randomIndex = Math.floor(Math.random() * jsonData.length); // Вибираємо випадковий індекс з масиву даних
    const board = jsonData[randomIndex].initial_state;
    minStepsDisplay.textContent = jsonData[randomIndex].minimum_steps_to_win;

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.onclick = () => {
                if (!startTime) {
                    startTime = Date.now();
                    timeInterval = setInterval(updateTimeDisplay, 1000);
                }
                toggleLights(i, j, board);
                clickCount++;
                updateClicksDisplay();
            };
            if (board[i][j] === 1) {
                cell.classList.add("on");
            }
            gameBoard.appendChild(cell);
        }
    }
}
function restartGame() {
    clickCount = 0;
    updateClicksDisplay();
    clearInterval(timeInterval);
    startTime = null;
    updateTimeDisplay();

}


function updateClicksDisplay() {
    clicksDisplay.textContent = clickCount;
}

function updateTimeDisplay() {
    if (startTime) {
        let currentTime = Math.floor((Date.now() - startTime) / 1000);
        timeLeftDisplay.textContent = currentTime;
    }
}

function toggleLights(x, y, board) {
    toggleCell(x, y, board);
    toggleCell(x - 1, y, board);
    toggleCell(x + 1, y, board);
    toggleCell(x, y - 1, board);
    toggleCell(x, y + 1, board);
    checkWin(board);
}

function toggleCell(x, y, board) {
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        let idx = x * boardSize + y;
        let cell = gameBoard.children[idx];
        if (board[x][y] === 1) {
            cell.classList.remove("on");
            board[x][y] = 0;
        } else {
            cell.classList.add("on");
            board[x][y] = 1;
        }
    }
}

function checkWin(board) {
    let isWin = true;
    for (let row of board) {
        for (let cell of row) {
            if (cell === 1) {
                isWin = false;
                break;
            }
        }
    }
    if (isWin) {
        alert("Молодчинка!))) Перемога!");
    }
}

loadLightData();

// Отримання посилання на кнопку "New Game"
let newGameButton = document.getElementById('new-game-button');

// Додавання обробника події для натискання на кнопку "New Game"
newGameButton.addEventListener('click', loadLightData);

// Отримання посилання на кнопку "Restart"
let restartButton = document.getElementById('restart-button');

// Додавання обробника події для натискання на кнопку "Restart"
restartButton.addEventListener("click", restartGame);
