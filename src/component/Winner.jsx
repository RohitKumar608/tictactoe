function Winner({ winner, handleResetGame }) {
  return winner ? (
    <>
      <div class='firework'></div>
      <div class='firework'></div>
      <div class='firework'></div>

      <div>
        <h2>{`The winner of the Game is : ${winner}`}</h2>
        <button className='submit' onClick={handleResetGame}>
          Restart
        </button>
      </div>
    </>
  ) : null
}

export default Winner
