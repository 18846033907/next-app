import { useSelector, useDispatch } from 'react-redux'
// import { INCREMENT,DECREMENT,RESET} from '../redux/action-types.js'

import {increment, decrement, reset} from '../redux/actions/count-actions.js'

const useCounter = () => {
  const countReducer = useSelector((state) => state.countReducer)
  const dispatch = useDispatch()
const {count,lastUpdate,light}=countReducer
  return { count,lastUpdate,light,dispatch }
}

const Counter = () => {
  const { count, dispatch} = useCounter()
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={()=>increment(dispatch)}>+1</button>
      <button onClick={()=>decrement(dispatch)}>-1</button>
      <button onClick={()=>reset(dispatch)}>Reset</button>
    </div>
  )
}

export default Counter