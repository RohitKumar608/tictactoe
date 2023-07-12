function Cell({ idx, winnerArr, val }) {
  return (
    <button
      className={`tictacktoe-btn ${
        winnerArr.includes(idx) ? 'winner-grid' : ''
      }`}
      data-id={idx}
    >
      {val}
    </button>
  )
}

export default Cell
