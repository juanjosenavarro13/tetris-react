import { useState } from 'react';
import './App.css';
import { MoveButtonGroup, TableBoard } from './components';
import { INITIAL_BOARD, VALID_MOVES } from './constants';
import { movePiece } from './utils';

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [rotatePiece, setRotatePiece] = useState<number>(0);

  const handleMove = (move: keyof typeof VALID_MOVES) => {
    const { board: newBoard, rotatePiece: newRotatePiece } = movePiece(
      board,
      move,
      rotatePiece,
    );
    setBoard(newBoard);
    setRotatePiece(newRotatePiece);
  };

  return (
    <div>
      <TableBoard board={board} />
      <MoveButtonGroup handleMove={handleMove} />
    </div>
  );
}

export default App;
