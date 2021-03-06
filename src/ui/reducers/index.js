import quarter from './quarter'
import scoring from './scoring'
import game from './game'

const reducer = (state, action, ...funcs) =>
  funcs.reduce((inProgress, current) =>
    current({ ...state, ...inProgress }, action)
  )
const noop = (state, action) => {
  return { state, action }
}
const composer = (...funcs) => {
  return (state, action) => reducer(state, action, ...funcs)
}

const composed = composer(noop, game, scoring, quarter)

export default composed
