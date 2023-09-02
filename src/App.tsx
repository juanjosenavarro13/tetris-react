import { useState } from 'react';
import './App.css';
import { MoveButtonGroup, TableBoard } from './components';
import { INITIAL_BOARD, VALID_MOVES } from './constants';
import { movePiece } from './utils';

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
