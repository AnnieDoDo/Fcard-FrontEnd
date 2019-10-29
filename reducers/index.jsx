import { combineReducers } from 'redux';
import { LogReg } from './LogReg.reducers.jsx';
import { alert } from './alert.reducers.jsx';

const rootReducer = combineReducers({
  LogReg,
  alert
});
export default rootReducer;