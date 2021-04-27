import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtils";
import Book from ".";

describe("book component", () => {
  let wrapper;
  beforeEach(() => {
    const setHookState = (newState) => jest.fn().mockImplementation(() => [
        newState,
        () => {},
      ]);

      const reactMock = require('react');

      reactMock.useState = setHookState({
        bookInfo: {},
        isFetching: false,
      });
    const baseProps = {
      match: { params: { ID: 3 } },
    };
    wrapper = shallow(<Book {...baseProps} />);
  });

  test("should render book component without error", () => {
    
    const component = findByTestAttr(wrapper, "book-card");
    expect(component).toHaveLength(1);
  });
});
