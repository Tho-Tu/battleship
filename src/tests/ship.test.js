import ship from "../ship";

test("Ship length", () => {
  expect(ship(6).shipLength).toBe(6);
});

test("Hit points", () => {
  expect(ship(6).getHitPoints()).toBe(6);
});

const exampleShip = ship(4);
exampleShip.hit();

test("Hit points after hit", () => {
  expect(exampleShip.getHitPoints()).toBe(3);
});

test("isSunk - false", () => {
  expect(exampleShip.isSunk()).toBe(false);
});

const exampleShipTwo = ship(1);
exampleShipTwo.hit();

test("isSunk - true", () => {
  expect(exampleShipTwo.isSunk()).toBe(true);
});
