import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../../../test/testUtils";
import Books from "./Books";

const mockBookInfo = {
  volumeInfo: {
    title: "abc",
    subtitle: "xyz",
    imageLinks: { thumbnail: "qwert" },
    description: "qwerty",
  },
};

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Books store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Books component", () => {
  test("should render books component without error when data is recieved", () => {
    const component = findByTestAttr(
      setup({
        books: {
          query: "abc",
          data: {
            kind: "books#volumes",
            totalItems: 1,
            items: [
              { id: "YtKbtgAACAAJ", volumeInfo: mockBookInfo.volumeInfo },
            ],
          },
        },
      }),
      "container"
    );
    expect(component).toHaveLength(1);
    expect(component.find("p").text()).toEqual("Total results: 1");
    expect(component.find("h3").text()).toEqual("Search results for: abc");
  });

  test("should render nothing when data recieved is empty", () => {
    const component = findByTestAttr(
      setup({
        books: {
          query: "abc",
        },
      }),
      "container"
    );
    expect(component.text()).toEqual("");
  });

  test("should render loading while data is being fetched", () => {
    const component = findByTestAttr(
      setup({
        books: {
          isFetching: true,
        },
      }),
      "container"
    );
    expect(component.find("p").text()).toEqual("Loading...");
  });
});
