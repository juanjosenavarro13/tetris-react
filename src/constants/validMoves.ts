import { ValidMoves } from '../types';

export const VALID_MOVES: ValidMoves = {
  moveDown: { x: 0, y: +1 },
  moveLeft: { x: -1, y: 0 },
  moveRight: { x: +1, y: 0 },
  rotate: [
    [
      { x: +1, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: -2, y: +1 },
    ],
    [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: +2, y: -1 },
      { x: +2, y: -1 },
    ],
    [
      { x: +1, y: 0 },
      { x: 0, y: +1 },
      { x: -1, y: +2 },
      { x: -2, y: +1 },
    ],
    [
      { x: -1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: -1 },
      { x: +1, y: -1 },
    ],
  ],
};
