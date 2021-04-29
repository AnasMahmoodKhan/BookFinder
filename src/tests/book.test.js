import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Book from "../components/screens/book/index";

const mockBookInfo = {
  volumeInfo: {
    title: "abc",
    subtitle: "xyz",
    imageLinks: { thumbnail: "qwert" },
    description: "qwerty",
  },
};
const baseProps = { match: { params: { id: "YtKbtgAACAAJ" } } };

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Book store={store} {...baseProps} />)
    .dive()
    .dive();
  return wrapper;
};

describe("book component", () => {
  test("should render book component without error", () => {
    const component = findByTestAttr(
      setup({
        books: {
          bookInfo: mockBookInfo,
        },
      }),
      "book-card"
    );
    expect(component).toHaveLength(1);
  });

  test("should render loading if the api call is await", () => {
    const component = findByTestAttr(
      setup({
        books: {
          isFetchingBookInfo: true,
        },
      }),
      "loading"
    );
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Loading...");
  });
});
