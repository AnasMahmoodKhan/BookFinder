import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe("App Component", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(setup(), "App");
    expect(component).toHaveLength(1);
  });

  test("should render routes without error", () => {
    const component = findByTestAttr(setup(), "Routes");
    expect(component).toHaveLength(1);
  });
});
