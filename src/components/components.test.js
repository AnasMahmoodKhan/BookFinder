import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Header from "./Header";
import Footer from "./Footer";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    const store = storeFactory({});
    wrapper = shallow(<Header store={store} />);
  });

  test("should render component without error", () => {
    const component = findByTestAttr(wrapper, "Header");
    expect(component).toHaveLength(1);
  });

  test("should render Brand", () => {
    const component = findByTestAttr(wrapper, "Brand");
    expect(component.text()).toEqual("Book Finder");
  });
});

describe("Footer Component", () => {
  test("should render component without error", () => {
    const store = storeFactory({});
    const wrapper = shallow(<Footer store={store} />);
    const component = findByTestAttr(wrapper, "Footer");
    expect(component).toHaveLength(1);
  });
});
