import { useDispatch } from 'react-redux'
import useInterval from '@lib/useInterval'
import Clock from './clock'
import Counter from './counter'
import Nav from './nav'
import {tick} from '@redux/actions/count-actions.js'

export default function Page() {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    tick(dispatch)
  }, 1000)

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  )
}