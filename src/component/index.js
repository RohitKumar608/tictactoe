import { useEffect, useMemo, useState } from 'react'
import Grid from './Grid'
import Winner from './Winner'
import Tie from './Tie'
import Replay from './Replay'

import { generateTicTacToeWinnerComb, getWinner, createGridArr } from '../utils'

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
      document.querySelector('body').classList.add('firework_background')
    }
    if (!winner && noOfBoxChecked === row * row) {
      setWinnerDetails({ result: 'Tie' })
    }
  }, [winner, row, idx])

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
    document.querySelector('body').classList.remove('firework_background')
  }

  const handleOnClick = (e) => {
    const value = +e.target.dataset.id
    if (state[value] || winner) {
      return
    }
    state[value] = nextPlayer
    setState([...state])
    setStack([...stack, [...state]])
    noOfBoxChecked++
  }

  return (
    <div className='game-container'>
      <Tie
        winner={winner}
        row={row}
        handleResetGame={handleResetGame}
        noOfBoxChecked={noOfBoxChecked}
      />
      <Winner winner={winner} handleResetGame={handleResetGame} />
      <Grid
        handleOnClick={handleOnClick}
        state={state}
        winnerArr={winnerArr}
        row={row}
      />
      <Replay
        winner={winner}
        handleNextPrevMov={handleNextPrevMov}
        currentIdx={currentIdx}
        stack={stack}
      />
    </div>
  )
}

export default TicTacToe
