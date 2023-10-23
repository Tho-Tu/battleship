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
        : renderGridConditions(i, j, gameBoard, grid);

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
      grid.addEventListener("click", () => {
        gameBoard.receiveAttack(j, i);
        renderGridConditions(i, j, gameBoard, grid);
      });

      renderGridConditions(i, j, gameBoard, grid);
      row.appendChild(grid);
    }
    gridSquares.appendChild(row);
  }
}

function renderGridConditions(y, x, gameBoard, grid) {
  gameBoard.getGameGrid()[y][x] === "hit"
    ? grid.classList.add("hit")
    : gameBoard.getGameGrid()[y][x] === "miss"
    ? grid.classList.add("miss")
    : undefined;
}
