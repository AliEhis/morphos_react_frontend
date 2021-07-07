import { combineReducers } from 'redux'
import { robotReducer } from './robotReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
  data: robotReducer,
  cart: cartReducer,
});

export default rootReducer;