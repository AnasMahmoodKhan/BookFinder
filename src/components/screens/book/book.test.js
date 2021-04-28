import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtils";
import Book from "./index";

describe("book component", () => {
  let wrapper;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    const props = {
      match: { params: { ID: 3 } },
    };

    mockUseEffect();
    wrapper = shallow(<Book {...props} />);
  });

  test("should render book component without error", () => {
    const component = findByTestAttr(wrapper, "book-card");
    console.log(wrapper.debug());
    expect(component).toHaveLength(1);
  });
});
