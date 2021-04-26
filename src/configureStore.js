import { createHashHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const history = createHashHistory();

const preloadedState = {};

const store = createStore(
  createRootReducer(history),
  preloadedState,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
export default store;
