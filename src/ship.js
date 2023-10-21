export default function ship(length) {
  let shipLength = length;
  let hitPoints = length;

  const getHitPoints = () => {
    return hitPoints;
  };

  const hit = () => {
    hitPoints -= 1;
  };

  const isSunk = () => {
    return hitPoints <= 0;
  };
  return { shipLength, getHitPoints, hit, isSunk };
}
