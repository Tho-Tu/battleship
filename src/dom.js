import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";

export default function dom(playerGameBoard, enemyGameBoard) {
  //
  const content = document.querySelector(".content");

  const player = document.querySelector(".player");
  const playerSquares = document.querySelector(".player-squares");

  const enemy = document.querySelector(".enemy");
  const enemySquares = document.querySelector(".enemy-squares");

  renderPlayerGameGrid(playerSquares, playerGameBoard);
  renderEnemyGameGrid(enemySquares, enemyGameBoard);

  //   render the ships
}

function renderPlayerGameGrid(gridSquares, gameBoard) {
  gridSquares.textContent = "";
  let gridSize = gameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");

      typeof gameBoard.getGameGrid()[i][j] === "object"
        ? grid.classList.add("ship")
        : renderGridConditions(i, j, gameBoard);

      row.appendChild(grid);
    }
    gridSquares.appendChild(row);
  }
}

function renderEnemyGameGrid(gridSquares, gameBoard) {
  gridSquares.textContent = "";
  let gridSize = gameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");

      renderGridConditions(i, j, gameBoard);
      row.appendChild(grid);
    }
    gridSquares.appendChild(row);
  }
}

function renderGridConditions(y, x, gameBoard) {
  gameBoard.getGameGrid()[y][x] === "hit"
    ? row.classList.add("hit")
    : gameBoard.getGameGrid()[y][x] === "miss"
    ? row.classList.add("miss")
    : undefined;
}

function startGame() {}
