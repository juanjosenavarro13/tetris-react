import { ValidMoves } from '../types/coordinates';

export const VALID_MOVES: ValidMoves = {
  moveDown: { x: 0, y: +1 },
  moveLeft: { x: -1, y: 0 },
  moveRight: { x: +1, y: 0 },
};
