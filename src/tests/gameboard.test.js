import gameBoard from "../gameboard";
import ship from "../ship";

let exampleGameBoard;
let exampleShip;
let exampleShipTwo;
let exampleShipThree;

beforeEach(() => {
  exampleGameBoard = gameBoard();
  exampleShip = ship(4);
  exampleGameBoard.placeShip(1, 1, exampleShip, "v");

  exampleShipTwo = ship(2);
  exampleGameBoard.placeShip(3, 0, exampleShipTwo, "h");
});

describe("testing vertical placement", () => {
  let grid;
  beforeEach(() => {
    grid = exampleGameBoard.getGameGrid();
  });
  test("place ship", () => {
    expect(grid[0][1]).toBeUndefined();
  });
  test("vertical position 1,1", () => {
    expect(grid[1][1]).toBe(exampleShip);
  });
  test("vertical position 2,1", () => {
    expect(grid[2][1]).toBe(exampleShip);
  });
  test("vertical position 3,1", () => {
    expect(grid[3][1]).toBe(exampleShip);
  });
  test("vertical position 4,1", () => {
    expect(grid[4][1]).toBe(exampleShip);
  });
});

describe("test horizontal placement", () => {
  let grid;
  beforeEach(() => {
    grid = exampleGameBoard.getGameGrid();
  });
  test("horizontal position 0,3", () => {
    expect(grid[0][3]).toBe(exampleShipTwo);
  });
  test("horizontal position 0,4", () => {
    expect(grid[0][4]).toBe(exampleShipTwo);
  });
});

describe("test incorrect ship placement", () => {
  let grid;
  beforeEach(() => {
    grid = exampleGameBoard.getGameGrid();
    exampleShipThree = ship(3);
  });

  test("incorrect ship placement", () => {
    expect(exampleGameBoard.placeShip(1, 0, exampleShipThree, "h")).toBe(false);
  });
  test("incorrect ship placement", () => {
    expect(exampleGameBoard.placeShip(0, 4, exampleShipThree, "h")).toBe(false);
  });
});

describe("attack ship", () => {
  let grid;
  beforeEach(() => {
    grid = exampleGameBoard.getGameGrid();
    exampleGameBoard.receiveAttack(3, 0);
  });
  test("attack ship two", () => {
    expect(grid);
  });
});
