import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";

export { renderPlayerGameGrid, renderEnemyGameGrid };

const playerSquares = document.querySelector(".player-squares");
const enemySquares = document.querySelector(".enemy-squares");

export default function dom(playerGameBoard, enemyGameBoard) {
  renderPlayerGameGrid(playerGameBoard);
  renderEnemyGameGrid(enemyGameBoard, playerGameBoard);
}

function renderPlayerGameGrid(gameBoard) {
  playerSquares.textContent = "";
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
    playerSquares.appendChild(row);
  }
}

function renderEnemyGameGrid(enemyGameBoard, playerGameBoard) {
  enemySquares.textContent = "";
  let gridSize = enemyGameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");
      grid.addEventListener("click", () => {
        if (enemyGameBoard.receiveAttack(j, i)) {
          enemyGameBoard.receiveAttack(j, i);
          player(playerGameBoard).makeMove();
          renderGridConditions(i, j, enemyGameBoard, grid);
          renderPlayerGameGrid(playerGameBoard);
        }
      });

      renderGridConditions(i, j, enemyGameBoard, grid);
      row.appendChild(grid);
    }
    enemySquares.appendChild(row);
  }
}

function renderGridConditions(y, x, gameBoard, grid) {
  gameBoard.getGameGrid()[y][x] === "hit"
    ? grid.classList.add("hit")
    : gameBoard.getGameGrid()[y][x] === "miss"
    ? grid.classList.add("miss")
    : undefined;
}
