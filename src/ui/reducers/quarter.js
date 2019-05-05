const reducer = (state, action) => {
  console.log('Quarter Reducer')
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'game.start':
      return { ...state, currentQuarter: 'first' }
    case 'quarter.start':
      return { ...state, home: state.home + 1 }
    case 'quarter.end':
      return { ...state, away: state.away + 1 }
    default:
      return state
  }
}

export default reducer
