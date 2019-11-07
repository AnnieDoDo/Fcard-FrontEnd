import { combineReducers } from 'redux';
import { LogReg } from './LogReg.reducers.jsx';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  LogReg,
  router: connectRouter(history)
});
export default rootReducer;