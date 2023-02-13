import calculateWinner from "../lib/calculateWinner";

export default function GameStatus({ squares, isX }) {
  const winner = calculateWinner(squares)

  // this will always be caculated on every render
  // so there's no need to memoize it or making it a state
  let status

  if (winner) status = `We have a winner! ${winner}`;
  else status = 'Next turn: ' + (isX ? 'X' : 'O');

  return <div className="status">{status}</div>

}