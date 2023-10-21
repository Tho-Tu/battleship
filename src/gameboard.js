import ship from "./ship";

export default function gameBoard() {
  let gameGrid = [...Array(10)].map(() => Array(10));

  //   define ships
  let shipOne = ship(2);
  let shipTwo = ship(3);
  let shipThree = ship(4);
  let shipFour = ship(5);
  let allShips = [shipOne, shipTwo, shipThree, shipFour];

  const getGameGrid = () => {
    return gameGrid;
  };

  const verifyPosition = (x, y, ship, direction) => {
    // verify that no other ship is at position and ship fits into grid
    const gridSize = 10;
    if (direction === "v") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y + i][x] !== undefined) {
          console.log("another ship in this position");
          return false;
        }
      }
      return (
        x >= 0 && x < gridSize && y >= 0 && y + ship.shipLength <= gridSize
      );
    } else if (direction === "h") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y][x + i] !== undefined) {
          console.log("another ship in this position");
          return false;
        }
      }
      return (
        x >= 0 && x + ship.shipLength <= gridSize && y >= 0 && y < gridSize
      );
    } else {
      return false;
    }
  };

  const placeShip = (x, y, ship, direction) => {
    if (verifyPosition(x, y, ship, direction)) {
      if (direction === "v") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y + i][x] = ship;
        }
      }

      if (direction === "h") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y][x + i] = ship;
        }
      }
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {
    if (typeof gameGrid[y][x] === "object") {
      gameGrid[y][x].hit();
      gameGrid[y][x] = true;
      return true;
    } else if (gameGrid[y][x] === undefined) {
      gameGrid[y][x] = true;
      return true;
    } else {
      console.log(`cannot attack at this coordinate x:${x},y:${y}`);
      return false;
    }
  };

  const isAllSunk = () => {
    return allShips.every((ship) => ship.isSunk());
  };

  return { getGameGrid, placeShip, receiveAttack, isAllSunk };
}
