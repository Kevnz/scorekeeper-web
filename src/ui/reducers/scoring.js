const reducer = (state, action) => {
  console.log('Scoring Reducer')
  console.log('state', state)
  console.log('action', action)
  if (state.currentQuarter === null) {
    return { ...state, error: 'Not an active quater' }
  }
  switch (action.type) {
    case 'score.home':
      return { ...state, home: state.home + 1 }
    case 'score.away':
      return { ...state, away: state.away + 1 }
    default:
      return state
  }
}

export default reducer
