import ship from "../ship";

test("Ship length", () => {
  expect(ship(6).shipLength).toBe(6);
});

test("Hit points", () => {
  expect(ship(6).hitPoints).toBe(6);
});

test("Hit points after hit", () => {
  expect(ship(6).hit().hitPoints).toBe(5);
});
