import { VALID_MOVES } from '../constants/validMoves';
import { CLEAR_BOARD } from '../constants/initialBoard';

export function movePiece(
  board: string[][],
  direction: keyof typeof VALID_MOVES,
): string[][] {
  const moveX = VALID_MOVES[direction].x;
  const moveY = VALID_MOVES[direction].y;

  const newBoard = JSON.parse(JSON.stringify(CLEAR_BOARD));

  for (let indexY = 0; indexY < board.length; indexY++) {
    for (let indexX = 0; indexX < board[indexY].length; indexX++) {
      if (board[indexY][indexX] === '⬛') {
        const newIndexY = indexY + moveY;
        const newIndexX = indexX + moveX;
        newBoard[newIndexY][newIndexX] = '⬛';
      }
    }
  }

  return newBoard;
}
