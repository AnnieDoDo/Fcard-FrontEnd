import { combineReducers } from 'redux';
import { LogReg } from './LogReg.reducers.jsx';
import { DrawCard } from './DrawCard.reducers.jsx'
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
  LogReg,
  DrawCard,
  router: connectRouter(history)
});
export default rootReducer;