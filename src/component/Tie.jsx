function Tie({ winner, row, handleResetGame, noOfBoxChecked }) {
  return !winner && noOfBoxChecked === row * row ? (
    <div>
      <h2>The Match is Tie</h2>
      <button className='submit' onClick={handleResetGame}>
        Restart
      </button>
    </div>
  ) : null
}

export default Tie
