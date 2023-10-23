import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import dom from "./dom";
import "./styles/styles.css";

gameController();

function gameController() {
  // controls flow of game
  // step through game turn by turn

  // predetermined coordinates for now
  let playerOne = ship(2);
  let playerTwo = ship(3);
  let playerThree = ship(4);
  let playerFour = ship(5);

  let enemyOne = ship(2);
  let enemyTwo = ship(3);
  let enemyThree = ship(4);
  let enemyFour = ship(5);

  let playerGameBoard = gameBoard();
  playerGameBoard.placeShip(0, 9, playerOne, "h");
  playerGameBoard.placeShip(3, 4, playerTwo, "h");
  playerGameBoard.placeShip(2, 2, playerThree, "h");
  playerGameBoard.placeShip(8, 3, playerFour, "v");

  // playerGameBoard.receiveAttack(0, 9);
  // playerGameBoard.receiveAttack(4, 9);

  let enemyGameBoard = gameBoard();
  enemyGameBoard.placeShip(0, 0, enemyOne, "h");
  enemyGameBoard.placeShip(1, 1, enemyTwo, "h");
  enemyGameBoard.placeShip(2, 2, enemyThree, "h");
  enemyGameBoard.placeShip(3, 3, enemyFour, "h");

  // enemyGameBoard.receiveAttack(0, 0);
  // enemyGameBoard.receiveAttack(4, 9);

  dom(playerGameBoard, enemyGameBoard);
}
