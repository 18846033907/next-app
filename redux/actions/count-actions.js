import { TICK,INCREMENT,DECREMENT,RESET} from '../action-types.js'

export const tick = dispatch => {
    dispatch({
      type: TICK,
      light: true,
      lastUpdate: Date.now()})
}

export const increment = dispatch =>
    dispatch({
      type: INCREMENT,
    })
  export const decrement = dispatch =>
    dispatch({
      type: DECREMENT,
    })
  export const reset = dispatch =>
    dispatch({
      type: RESET,
    })