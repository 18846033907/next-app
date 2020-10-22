import { combineReducers } from 'redux'
import {reducer as countReducer} from '@pages/home/store'

export default combineReducers({
  countReducer,
})