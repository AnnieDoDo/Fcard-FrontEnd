
import { createStore, StoreapplyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "../reducers/index.jsx";
import logger from 'redux-logger'

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

