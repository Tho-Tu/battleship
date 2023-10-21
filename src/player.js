export default function player(gameBoard) {
  const random = () => {
    return Math.floor(Math.random() * 10);
  };

  const makeMove = () => {
    let x = random();
    let y = random();

    let attack = gameBoard.receiveAttack(x, y);
    if (attack === false) {
      makeMove();
    }
  };

  return { makeMove };
}
