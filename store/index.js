import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { user } from "./reducers/user";
import { search } from "./reducers/search";

const middleware = applyMiddleware(thunk, logger);
const rootReducer = combineReducers({ user, search });

const makeStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
};

export { makeStore };
