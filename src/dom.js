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

  renderGameGrid(playerSquares, playerGameBoard);
  renderGameGrid(enemySquares, enemyGameBoard);
}

function renderGameGrid(gridSquares, gameBoard) {
  gridSquares.textContent = "";
  let gridSize = gameBoard.getGameGrid().length;

  for (let i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");

    for (let j = 0; j < gridSize; j++) {
      const row = document.createElement("div");
      row.setAttribute("class", "grids");
      column.appendChild(row);
    }
    gridSquares.appendChild(column);
  }
}

function startGame() {}
