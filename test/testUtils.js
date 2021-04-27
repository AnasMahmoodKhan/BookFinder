import { applyMiddleware, createStore } from "redux";
import checkPropTypes from "check-prop-types";
import { history, middlewares } from "../src/configureStore";

import bookreducer from "../src/reducers/rootReducer";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(bookreducer(history), initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
