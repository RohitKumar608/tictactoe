import Cell from './Cell'

function Grid(props) {
  const { handleOnClick, state, winnerArr, row } = props
  return (
    <div style={{ display: 'inline-flex', marginTop: '1rem' }}>
      <div
        onClick={handleOnClick}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${row}, 1fr)`,
        }}
      >
        {state.map((val, idx) => (
          <Cell key={idx} idx={idx} winnerArr={winnerArr} val={val} />
        ))}
      </div>
    </div>
  )
}

export default Grid
