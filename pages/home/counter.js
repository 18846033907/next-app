import { useSelector, useDispatch } from 'react-redux'
import { constants} from './store'
import Counter from '@components/counter.js'

const { INCREMENT,DECREMENT,RESET}=constants
const useCounter = () => {
  const countReducer = useSelector((state) => state.countReducer)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: INCREMENT,
    })
  const decrement = () =>
    dispatch({
      type: DECREMENT,
    })
  const reset = () =>
    dispatch({
      type: RESET,
    })
const {count,lastUpdate,light}=countReducer
  return { count,lastUpdate,light,increment,decrement,reset }
}

export default function CounterContainer(){
    return(<Counter  useCounter={useCounter}/>)
}