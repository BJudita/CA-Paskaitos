//selectors
const scoreElement = document.querySelector("#score");
const bestScoreElement = document.querySelector("#best-score");
const newGameButton = document.querySelector("#new-game");
const gridContainer = document.querySelector(".grid-container");

// GRID SETUP - represent the gridd as 4x4 array
// grid as 2d array
let grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

let score = 0;
let bestScore = 0;

// initialize game
function startGame() {
    grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    score = 0;
    // Load best score from localStorage
    bestScore = localStorage.getItem('bestScore') || 0; 
    bestScoreElement.textContent = bestScore;
    addNewTile();
    updateUI();
}
// ADD Tiles randomly add new tiles with 2 or 4 value after every move
function addNewTile () {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                emptyCells.push({x: i, y: j});
            }
        }
    }
    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        grid[randomCell.x][randomCell.y] = Math.random() < 0.9 ? 2 : 4;
        }
}

// Start a new game on button click
newGameButton.addEventListener('click', startGame);

// Start the game initially
startGame();
//add arrow events
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
    let previousGrid = JSON.stringify(grid); // Save current state as a string
    switch (e.key) {
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowDown':
        moveDown();
        break;
        case 'ArrowLeft':
            moveLeft();
        break;
        case  'ArrowRight':
        moveRight();
        break;
        default:
            return;
    }
    if (JSON.stringify(grid) !== previousGrid) { // Add new tile only if grid changed
    addNewTile();
    }
    updateUI();
    checkGameOver();
}
// Update UI - reflect the grid state in html

function updateUI() {
    const cells = gridContainer.querySelectorAll(".grid-cell");
    let index = 0;
    let has2048 = false;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            cells[index].textContent = grid[i][j] === 0 ? "" : grid[i][j];
            cells[index].className = `grid-cell tile-${grid[i][j]}`;
            if (grid[i][j] === 2048) {
                console.log("2048 detected!");
                has2048 = true;
            }
            index++;
        }
    }
    scoreElement.textContent = score;
        // Update best score if necessary
        if (score > bestScore) {
            bestScore = score;
            bestScoreElement.textContent = bestScore;
            localStorage.setItem('bestScore', bestScore); // Save best score to localStorage
        }
        const winMessage = document.querySelector("#win-message");
        if (has2048) {
            winMessage.style.display = "block"; // Show win message
        } else {
            winMessage.style.display = "none"; // Hide win message
        }
    }

// Slide Tiles - implement sliding logic for each direction
function moveUp() {
    // Transpose the grid
    let transposedGrid = transposeGrid(grid);

    // Slide and merge each row
    for (let i = 0; i < 4; i++) {
        let row = transposedGrid[i];
        let newRow = slideAndMerge(row);
        transposedGrid[i] = newRow;
    }

    // Transpose back to original orientation
    grid = transposeGrid(transposedGrid);
    
    updateUI(); // Update the grid display
}

// Helper Function: Transpose the grid
function transposeGrid(grid) {
    let newGrid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}

// Helper Function: Slide and merge a row
function slideAndMerge(row) {
    // Remove zeroes
    let filteredRow = row.filter(num => num !== 0);
    
    // Merge tiles
    for (let i = 0; i < filteredRow.length - 1; i++) {
        if (filteredRow[i] === filteredRow[i + 1]) {
            filteredRow[i] *= 2;
            score += filteredRow[i]; // Update the score
            filteredRow[i + 1] = 0; // Set merged tile to 0
        }
    }
    
    // Remove zeroes again after merging
    let newRow = filteredRow.filter(num => num !== 0);
    
    // Add zeroes to the end to make the row length 4
    while (newRow.length < 4) {
        newRow.push(0);
    }
    return newRow;
}

function moveDown() {
    // Transpose the grid
    let transposedGrid = transposeGrid(grid);

    // Slide and merge each row in reverse order
    for (let i = 0; i < 4; i++) {
        let row = transposedGrid[i];
        let newRow = slideAndMerge(row.reverse()).reverse();
        transposedGrid[i] = newRow;
    }

    // Transpose back to original orientation
    grid = transposeGrid(transposedGrid);

    updateUI(); // Update the grid display
}

function moveLeft() {
    for (let i = 0; i < 4; i++) {
        let row = grid[i];
        grid[i] = slideAndMerge(row);
    }

    updateUI(); // Update the grid display
}

function moveRight() {
    for (let i = 0; i < 4; i++) {
        let row = grid[i];
        grid[i] = slideAndMerge(row.reverse()).reverse();
    }

    updateUI(); // Update the grid display
}

function checkGameOver() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) return; // Empty cell exists
            if (j < 3 && grid[i][j] === grid[i][j + 1]) return; // Merge possible horizontally
            if (i < 3 && grid[i][j] === grid[i + 1][j]) return; // Merge possible vertically
        }
    }
    alert('Game Over!');
}
