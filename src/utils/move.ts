import { VALID_MOVES, CLEAR_BOARD } from '../constants';

export function movePiece(
  board: string[][],
  direction: keyof typeof VALID_MOVES,
  rotatePiece: number,
): { board: string[][]; rotatePiece: number } {
  const newBoard: string[][] = JSON.parse(JSON.stringify(CLEAR_BOARD));

  let validMove = true;
  let rotateItem = 0;
  console.log('rotatePiece', rotatePiece);

  for (let indexY = 0; indexY < board.length; indexY++) {
    for (let indexX = 0; indexX < board[indexY].length; indexX++) {
      if (board[indexY][indexX] === '⬛') {
        const { moveX, moveY } = getNewIndex(
          direction,
          rotateItem,
          rotatePiece,
        );

        const newIndexY = indexY + moveY;
        const newIndexX = indexX + moveX;

        if (!isValidMove(newIndexY, newIndexX, newBoard)) {
          validMove = false;
        } else {
          rotateItem = getNewRotate(rotateItem);
          newBoard[newIndexY][newIndexX] = '⬛';
        }
      }
    }
  }

  if (validMove)
    return {
      board: newBoard,
      rotatePiece:
        direction === 'rotate' ? getNewRotate(rotatePiece) : rotatePiece,
    };
  return { board, rotatePiece };
}

function getNewRotate(rotate: number) {
  if (rotate === 3) {
    return 0;
  }
  return ++rotate;
}

function getNewIndex(
  direction: keyof typeof VALID_MOVES,
  rotateItem: number,
  rotatePiece: number,
): {
  moveX: number;
  moveY: number;
} {
  if (direction !== 'rotate') {
    return { moveX: VALID_MOVES[direction].x, moveY: VALID_MOVES[direction].y };
  } else {
    return {
      moveX: VALID_MOVES[direction][rotatePiece][rotateItem].x,
      moveY: VALID_MOVES[direction][rotatePiece][rotateItem].y,
    };
  }
}

function isValidMove(y: number, x: number, board: string[][]): boolean {
  return y >= 0 && x >= 0 && y < board.length && x < board[0].length;
}
