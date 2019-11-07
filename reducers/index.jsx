import { combineReducers } from 'redux';
import { LogReg } from './LogReg.reducers.jsx';
import { alert } from './alert.reducers.jsx';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  LogReg,
  alert,
  router: connectRouter(history)
});
export default rootReducer;