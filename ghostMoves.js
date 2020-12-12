import { DIRECTIONS, OBJECT_TYPE } from './setup';

// Primitive Randomm Movement //
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;

  // Create Array from Directions Object Keys //
  const keys = Object.keys(DIRECTIONS);

  while (objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOST)) {
    //Get Random Key from Key Array //
    const key = keys[Math.floor(Math.random() * keys.length)];
    // Set Next Move //
    dir = DIRECTIONS[key];
    // Set Next Move //
    nextMovePos = position + dir.movement;
  }
  return { nextMovePos, direction: dir };
}
