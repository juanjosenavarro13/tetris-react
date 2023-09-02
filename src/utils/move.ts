import { VALID_MOVES, CLEAR_BOARD } from '../constants';

export function movePiece(
  board: string[][],
  direction: keyof typeof VALID_MOVES,
): string[][] {
  const moveX = VALID_MOVES[direction].x;
  const moveY = VALID_MOVES[direction].y;

  const newBoard = JSON.parse(JSON.stringify(CLEAR_BOARD));

  let validMove = true;

  for (let indexY = 0; indexY < board.length; indexY++) {
    for (let indexX = 0; indexX < board[indexY].length; indexX++) {
      if (board[indexY][indexX] === '⬛') {
        const newIndexY = indexY + moveY;
        const newIndexX = indexX + moveX;

        if (!isValidMove(newIndexY, newIndexX, newBoard)) validMove = false;

        newBoard[newIndexY][newIndexX] = '⬛';
      }
    }
  }

  if (validMove) return newBoard;
  return board;
}

function isValidMove(y: number, x: number, board: string[][]): boolean {
  return y >= 0 && x >= 0 && y < board.length && x < board[0].length;
}
