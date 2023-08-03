'use client'
import { useState } from 'react'
import Square from './Square'

function checkWinner(squares: string[]) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

export default function Game() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null))
  const [isX, setIsX] = useState(true)

  const handleClick = (index: number) => {
    if (checkWinner(squares) || squares[index]) {
      return
    }
    squares[index] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
  }

  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  const winner = checkWinner(squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else if (squares.every(Boolean)) {
    status = 'Draw'
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O')
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <p className="text-xl bg-blue-900 text-white rounded-md text-center py-3">
          {status}
        </p>
        <button
          className="bg-cyan-700 rounded-md text-xl text-center text-white py-3"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </>
  )
}
