import {TICK,INCREMENT,DECREMENT,RESET} from './constants.js'

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
} 
const countReducer = (state = initialState, action) => {
  console.log(9,action)
  switch (action.type) {
    case TICK:
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case RESET:
      return {
        ...state,
        count: initialState.count,
      }
    default:
      return state
  }
}

export default countReducer