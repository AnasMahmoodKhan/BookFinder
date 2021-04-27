import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Header from "./Header";
import Footer from "./Footer";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
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
    const wrapper = shallow(<Footer />);
    const component = findByTestAttr(wrapper, "Footer");
    expect(component).toHaveLength(1);
  });
});
