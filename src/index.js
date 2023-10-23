import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import dom from "./dom";
import "./styles/styles.css";

gameController();

function gameController() {
  // controls flow of game
  // step through game turn by turn

  startGame();
}

function startGame() {
  // create ships
  let playerOne = ship(2);
  let playerTwo = ship(3);
  let playerThree = ship(4);
  let playerFour = ship(5);
  const playerShips = [playerOne, playerTwo, playerThree, playerFour];

  let enemyOne = ship(2);
  let enemyTwo = ship(3);
  let enemyThree = ship(4);
  let enemyFour = ship(5);
  const enemyShips = [enemyOne, enemyTwo, enemyThree, enemyFour];

  let playerGameBoard = gameBoard();
  randomizeLayout(playerGameBoard, playerShips);

  //   playerGameBoard.placeShip(0, 9, playerOne, "h");
  //   playerGameBoard.placeShip(3, 4, playerTwo, "h");
  //   playerGameBoard.placeShip(2, 2, playerThree, "h");
  //   playerGameBoard.placeShip(8, 3, playerFour, "v");

  let enemyGameBoard = gameBoard();
  enemyGameBoard.placeShip(0, 0, enemyOne, "h");
  enemyGameBoard.placeShip(1, 1, enemyTwo, "h");
  enemyGameBoard.placeShip(2, 2, enemyThree, "h");
  enemyGameBoard.placeShip(3, 3, enemyFour, "h");

  dom(playerGameBoard, enemyGameBoard);

  const randomizeLayoutButton = document.getElementById("randomize-layout");
  randomizeLayoutButton.addEventListener("click", () => {
    playerGameBoard.resetShips();
    randomizeLayout(playerGameBoard, playerShips);
    dom(playerGameBoard, enemyGameBoard);
  });
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
