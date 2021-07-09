
import thunkMiddleware from 'redux-thunk';
import {createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers';

const middlewares =[thunkMiddleware]

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;