import { combineReducers } from 'redux'
import { robotReducer } from './robotReducer';

const rootReducer = combineReducers({
  data: robotReducer,
});

export default rootReducer;