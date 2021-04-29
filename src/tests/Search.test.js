import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Search from "../components/screens/home/containers/Search";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Search store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Search component", () => {
  test("should render search component without error when nothing searches", () => {
    const component = findByTestAttr(setup({}), "search-books");
    expect(component).toHaveLength(1);
    expect(findByTestAttr(component, "input").props().placeholder).toEqual(
      "Harry Potter, Food and Love"
    );
  });
});
