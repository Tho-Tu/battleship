import ship from "./ship";

export default function gameBoard() {
  let gameGrid = [...Array(10)].map(() => Array(10));

  //   define ships
  let allShips = [];

  const getGameGrid = () => {
    return gameGrid;
  };

  const resetShips = () => {
    allShips = [];
    gameGrid = [...Array(10)].map(() => Array(10));
  };

  const verifyPosition = (x, y, ship, direction) => {
    // verify that no other ship is at position and ship fits into grid
    const gridSize = gameGrid.length;
    if (direction === "v") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y + i][x] !== undefined) {
          return false;
        }
      }
      return (
        x >= 0 && x < gridSize && y >= 0 && y + ship.shipLength <= gridSize
      );
    } else if (direction === "h") {
      for (let i = 0; i < ship.shipLength; i++) {
        if (gameGrid[y][x + i] !== undefined) {
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
      allShips.push(ship);
      if (direction === "v") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y + i][x] = ship;
        }
        return true;
      }

      if (direction === "h") {
        for (let i = 0; i < ship.shipLength; i++) {
          gameGrid[y][x + i] = ship;
        }
        return true;
      }
    } else {
      return false;
    }
  };

  const receiveAttack = (x, y) => {
    if (typeof gameGrid[y][x] === "object") {
      gameGrid[y][x].hit();
      gameGrid[y][x] = "hit";
      return "hit";
    } else if (gameGrid[y][x] === undefined) {
      gameGrid[y][x] = "miss";
      return "miss";
    } else {
      return false;
    }
  };

  const isAllSunk = () => {
    return allShips.every((ship) => ship.isSunk());
  };

  return {
    getGameGrid,
    resetShips,
    placeShip,
    receiveAttack,
    isAllSunk,
  };
}
