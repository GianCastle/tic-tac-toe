// instead of calculating combinations dynamically
// we could just have a list of all possible winning combinations instead
export default function calculateWinner(squares) {
  const winPatterns = [
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [0, 1, 2],
    [2, 4, 6],

  ]

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}