import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import dom, { renderPlayerGameGrid, renderEnemyGameGrid } from "./dom";
import "./styles/styles.css";

export { attackController };

function gameSetup() {
  const playerShips = [ship(2), ship(3), ship(4), ship(5)];
  const enemyShips = [ship(2), ship(3), ship(4), ship(5)];

  const playerGameBoard = gameBoard();
  randomizeLayout(playerGameBoard, playerShips);

  const enemyGameBoard = gameBoard();
  randomizeLayout(enemyGameBoard, enemyShips);

  renderPlayerGameGrid(playerGameBoard);

  return { playerGameBoard, enemyGameBoard, playerShips };
}

function randomizeLayout(gameBoard, ships) {
  for (let i = 0; i < ships.length; i++) {
    let ship = ships[i];
    let attempts = 0;
    let placed = false;
    while (attempts < 100 && !placed) {
      let randDirection = Math.random() > 0.5 ? "v" : "h";
      let randX;
      let randY;
      if (randDirection === "v") {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 6);
      } else {
        randX = Math.floor(Math.random() * 6);
        randY = Math.floor(Math.random() * 10);
      }

      if (gameBoard.placeShip(randX, randY, ship, randDirection)) {
        gameBoard.placeShip(randX, randY, ship, randDirection);
        placed = true;
      }
      attempts++;
    }
    if (!placed) {
      console.log("Failed to place ship:", ship);
    }
  }
}

function eventHandling(playerGameBoard, enemyGameBoard) {
  const { playerShips } = gameSetup();
  const startButton = document.getElementById("start-game");
  const randomizeLayoutButton = document.getElementById("randomize-layout");

  const enemyDiv = document.querySelector(".enemy");

  startButton.addEventListener("click", () => {
    dom(playerGameBoard, enemyGameBoard);
    enemyDiv.style.cssText = "display: flex";
    randomizeLayoutButton.style.cssText = "display: none";
    startButton.style.cssText = "display: none";
  });

  randomizeLayoutButton.addEventListener("click", () => {
    playerGameBoard.resetShips();
    randomizeLayout(playerGameBoard, playerShips);
    renderPlayerGameGrid(playerGameBoard);
  });
}

function attackController(x, y, enemyGameBoard, playerGameBoard) {
  if (enemyGameBoard.receiveAttack(x, y)) {
    enemyGameBoard.receiveAttack(x, y);
    player(playerGameBoard).makeMove();
  }
  if (enemyGameBoard.isAllSunk()) {
    return "Player Wins";
  }
  if (playerGameBoard.isAllSunk()) {
    return "Enemy Wins";
  }
}

function gameController() {
  const { playerGameBoard, enemyGameBoard } = gameSetup();
  eventHandling(playerGameBoard, enemyGameBoard);
}

gameController();
