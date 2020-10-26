import { useSelector, shallowEqual } from 'react-redux'
import Clock from '@components/clock.js'

const useClock = () => {
  return useSelector(
    (state) => ({
      countReducer: state.countReducer
    }),
    shallowEqual
  )
}

export default function ClockContainer(){
return (<Clock useClock={useClock}/>)
}