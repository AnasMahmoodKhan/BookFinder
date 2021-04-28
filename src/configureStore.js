import { createHashHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const middlewares = [thunk];
export const history = createHashHistory();

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(
  createRootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
