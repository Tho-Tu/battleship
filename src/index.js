import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import dom from "./dom";
import "./styles/styles.css";

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
playerGameBoard.placeShip(1, 1, playerTwo, "h");
playerGameBoard.placeShip(2, 2, playerThree, "h");
playerGameBoard.placeShip(3, 3, playerFour, "h");

let enemyGameBoard = gameBoard();
enemyGameBoard.placeShip(0, 0, enemyOne, "h");
enemyGameBoard.placeShip(1, 0, enemyTwo, "h");
enemyGameBoard.placeShip(2, 0, enemyThree, "h");
enemyGameBoard.placeShip(3, 0, enemyFour, "h");

dom(playerGameBoard, enemyGameBoard);

function mainLoop() {
  // controls flow of game
  // step through game turn by turn
}
