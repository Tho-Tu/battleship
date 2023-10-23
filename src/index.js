import ship from "./ship";
import gameBoard from "./gameboard";
import player from "./player";
import dom from "./dom";
import "./styles/styles.css";

let playerGameBoard = gameBoard();
let enemyGameBoard = gameBoard();
dom(playerGameBoard, enemyGameBoard);
