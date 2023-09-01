import { useState } from 'react';
import './App.css';
import { INITIAL_BOARD } from './constants/initialBoard';
import { VALID_MOVES } from './constants/validMoves';
import { movePiece } from './utils/move';
import { MoveButtonGroup, TableBoard } from './components';

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);

  const handleMove = (move: keyof typeof VALID_MOVES) => {
    const newBoard = movePiece(board, move);
    setBoard(newBoard);
  };

  return (
    <div>
      <TableBoard board={board} />
      <MoveButtonGroup handleMove={handleMove} />
    </div>
  );
}

export default App;
