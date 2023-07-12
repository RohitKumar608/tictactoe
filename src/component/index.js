import { useEffect, useMemo, useState } from 'react'
import Grid from './Grid'

import { generateTicTacToeWinnerComb, getWinner } from '../utils'
function createGridArr(num) {
  const gridArray = []
  for (let i = 0; i < num; i++) {
    gridArray[i] = ''
  }
  return gridArray
}
var noOfBoxChecked = 0

const TicTacToe = ({ row }) => {
  const gridArray = createGridArr(row * row)
  const [state, setState] = useState([...gridArray])
  const [stack, setStack] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [winnerDetails, setWinnerDetails] = useState(0)

  const nextPlayer = noOfBoxChecked % 2 === 0 ? 'X' : 'O'

  const winnerCombination = useMemo(
    () => generateTicTacToeWinnerComb(row),
    [row]
  )

  const { winner, idx } = winnerDetails
    ? winnerDetails
    : getWinner(state, winnerCombination)
  const winnerArr = winner ? winnerCombination[idx] : []

  useEffect(() => {
    if (winner) {
      setWinnerDetails({ result: 'Win', idx: idx, winner: winner })
    }
    if (!winner && noOfBoxChecked === row * row) {
      setWinnerDetails({ result: 'Tie' })
    }
  }, [winner])

  const handleNextPrevMov = (param) => {
    setCurrentIdx(currentIdx + param)
    setState(stack[currentIdx + param])
  }
  const handleResetGame = () => {
    setState(gridArray)
    noOfBoxChecked = 0
    setCurrentIdx(0)
    setStack([])
    setWinnerDetails('')
  }

  const handleOnClick = (e) => {
    console.log(e.target, '----')
    const value = +e.target.dataset.id
    if (state[value] || winner) {
      return
    }
    state[value] = nextPlayer
    setState([...state])
    setStack([...stack, [...state]])
    noOfBoxChecked++
  }
  console.log(state)

  return (
    <div className='game-container'>
      {!winner && noOfBoxChecked === row * row && (
        <div>
          <h2>The Match is Tie</h2>
          <button className='submit' onClick={handleResetGame}>
            {' '}
            Restart
          </button>
        </div>
      )}
      {winner && (
        <>
          <div class='firework'></div>
          <div class='firework'></div>
          <div class='firework'></div>
        </>
      )}

      {winner && (
        <div>
          <h2>{`The winner of the Game is ${winner}`}</h2>
          <button className='submit' onClick={handleResetGame}>
            {' '}
            Restart
          </button>
        </div>
      )}
      <Grid
        handleOnClick={handleOnClick}
        state={state}
        winnerArr={winnerArr}
        row={row}
      />
      {winner && (
        <div className='winner-btn-container'>
          <button
            onClick={() => handleNextPrevMov(-1)}
            disabled={currentIdx === 0}
            className='submit'
          >
            Previous
          </button>
          <button
            className='submit'
            disabled={stack.length - 1 === currentIdx}
            onClick={() => handleNextPrevMov(1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default TicTacToe
