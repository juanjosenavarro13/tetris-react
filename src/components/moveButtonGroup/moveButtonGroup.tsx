import { VALID_MOVES } from '../../constants/validMoves';
import { MoveButton } from '../moveButton/moveButton';

interface Props {
  handleMove: (direction: keyof typeof VALID_MOVES) => void;
}

export function MoveButtonGroup(props: Props) {
  const { handleMove } = props;
  return (
    <>
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
      <MoveButton
        direction="rotate"
        onClickButton={(direction) => {
          handleMove(direction);
        }}
      />
    </>
  );
}
