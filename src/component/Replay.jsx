function Replay({ winner, handleNextPrevMov, currentIdx, stack }) {
  return (
    winner && (
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
    )
  )
}

export default Replay
