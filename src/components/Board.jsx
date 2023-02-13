import React from 'react'
import Square from './Square'

import calculateWinner from '../lib/calculateWinner'
import GameStatus from './GameStatus';

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [isX, setIsX] = React.useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return

    setSquares((prevSquares) => {
      const newSquares = [...prevSquares]
      newSquares[i] = isX ? 'X' : 'O'
      return newSquares
    })

    setIsX(!isX)
  }

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  return (
    <div className="board">
      <div className="row">
        {[0, 1, 2].map((i) => <Square value={squares[i]} onClick={() => handleClick(i)} />)}
      </div>
      <div className="row">
        {[3, 4, 5].map((i) => <Square value={squares[i]} onClick={() => handleClick(i)} />)}
      </div>
      <div className="row">
        {[6, 7, 8].map((i) => <Square value={squares[i]} onClick={() => handleClick(i)} />)}
      </div>
      <GameStatus squares={squares} isX={isX} />
      <button className="restart" onClick={handleRestart}>Restart</button>
    </div>
  )
}