import { VALID_MOVES } from '../../constants/validMoves';

interface Props {
  direction: keyof typeof VALID_MOVES;
  onClickButton: (direction: keyof typeof VALID_MOVES) => void;
}

interface Icons {
  moveDown: string;
  moveLeft: string;
  moveRight: string;
  rotate: string;
}

export function MoveButton(props: Props) {
  const { direction, onClickButton } = props;
  const icons: Icons = {
    moveDown: '⬇',
    moveLeft: '⬅',
    moveRight: '➡',
    rotate: '🔄',
  };

  return (
    <button
      onClick={() => {
        onClickButton(direction);
      }}
    >
      {icons[direction]}
    </button>
  );
}
