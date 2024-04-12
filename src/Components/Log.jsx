export default function Log({ turns }) {
  return (
    <ol if="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.row}`}>
          {turn.player} slected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
