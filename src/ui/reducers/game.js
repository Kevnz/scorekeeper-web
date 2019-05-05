const reducer = (state, action) => {
  console.log('Game Reducer')
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'game.start':
      return { ...state, status: 'IN-PROGRESS' }
    case 'game.end':
      return { ...state, status: 'FINAL' }
    case 'quarter.end':
      return { ...state, status: 'BREAK' }
    case 'quarter.start':
      return { ...state, status: 'IN-PROGRESS' }
    default:
      return state
  }
}
console.log('game?')
export default reducer
