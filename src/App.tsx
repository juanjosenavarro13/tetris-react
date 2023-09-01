import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { INITIAL_BOARD } from './constants/initialBoard';
import { VALID_MOVES } from './constants/validMoves';
import { movePiece } from './utils/move';
import { MoveButton } from './components';

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);

  const handleMove = (move: keyof typeof VALID_MOVES) => {
    const newBoard = movePiece(board, move);
    setBoard(newBoard);
  };

  return (
    <div>
      <table>
        <tbody>
          {board.map((row) => {
            return (
              <tr key={uuidv4()}>
                {row.map((item) => {
                  return <td key={uuidv4()}>{item}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <MoveButton
        direction="moveLeft"
        onClickButton={(direction) => {
          handleMove(direction);
        }}
      />
      <MoveButton
        direction="moveDown"
        onClickButton={(direction) => {
          handleMove(direction);
        }}
      />
      <MoveButton
        direction="moveRight"
        onClickButton={(direction) => {
          handleMove(direction);
        }}
      />
    </div>
  );
}

export default App;
