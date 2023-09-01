export interface Coordinates {
  y: number;
  x: number;
}

export interface ValidMoves {
  moveDown: Coordinates;
  moveLeft: Coordinates;
  moveRight: Coordinates;
}
