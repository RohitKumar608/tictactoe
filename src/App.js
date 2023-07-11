import { useState } from 'react'
import TicTacToe from './component'
import './App.css'

function App() {
  const [row, setRow] = useState(3)

  // const [isRowColSet, setIsRowCol] = useState(true)
  return (
    <div key={row} className='App'>
      <header className='App-header'>Tic Tac Toe</header>
      <div className='app-container'>
        <div className='input-container'>
          <input
            name='row'
            placeholder='Please enter number of rows'
            type='text'
            onChange={(evt) => setRow(evt.target.value)}
            value={row}
          />

          {/* <button
            className='submit'
            onClick={() => setIsRowCol(true)}
            type='button'
          >
            {' '}
            Submit{' '}
          </button> */}
        </div>
        <TicTacToe row={row} />
      </div>
    </div>
  )
}

export default App
