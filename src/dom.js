import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import { attackController } from ".";

export { renderPlayerGameGrid, renderEnemyGameGrid };

const playerSquares = document.querySelector(".player-squares");
const enemySquares = document.querySelector(".enemy-squares");

export default function dom(playerGameBoard, enemyGameBoard) {
  const playAgainButton = document.getElementById("play-again");
  const winnerText = document.querySelector(".play-again h1");
  const endGameDisplay = { playAgainButton, winnerText };
  renderPlayerGameGrid(playerGameBoard);
  renderEnemyGameGrid(enemyGameBoard, playerGameBoard, endGameDisplay);
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

function renderEnemyGameGrid(enemyGameBoard, playerGameBoard, endGameDisplay) {
  enemySquares.textContent = "";
  let gridSize = enemyGameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");

    for (let j = 0; j < gridSize; j++) {
      const grid = document.createElement("div");
      grid.setAttribute("class", "grids");
      grid.addEventListener("click", () => {
        const attack = attackController(j, i, enemyGameBoard, playerGameBoard);
        renderGridConditions(i, j, enemyGameBoard, grid);
        renderPlayerGameGrid(playerGameBoard);
        if (attack !== undefined) {
          endGameDisplay.playAgainButton.style.cssText = "display: block";
          endGameDisplay.winnerText.textContent = `${attack}!`;
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
