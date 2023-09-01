import { v4 as uuidv4 } from 'uuid';

interface Props {
  board: string[][];
}

export function TableBoard(props: Props) {
  const { board } = props;
  return (
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
  );
}
