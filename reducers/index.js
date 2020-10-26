import { combineReducers } from 'redux';
import { reducer as countReducer } from '@containers/home/store';

export default combineReducers({
  countReducer,
});
