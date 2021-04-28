import { RECEIVE_BOOKS, REQUEST_BOOKS } from "../actions/actionTypes";
import books from "./reducer";

describe("reducer tests", () => {
  let initStore;
  beforeEach(() => {
    initStore = {
      query: "",
      isFetching: false,
      data: {},
      error: "",
      isFetchingBookInfo: false,
      bookInfo: {},
      errorBookInfo: "",
    };
  });

  test("should return default initial state when no action is passed", () => {
    const newState = books(undefined, {});
    expect(newState).toStrictEqual(initStore);
  });

  test('should return state of query upon receiving an action of type "REQUEST_BOOKS"', () => {
    const newState = books(initStore, {
      type: REQUEST_BOOKS,
      query: "abc",
    });

    expect(newState).toStrictEqual({
      ...initStore,
      isFetching: true,
      query: "abc",
    });
  });

  test('should return state of data upon receiving an action of type "RECIEVE_BOOKS"', () => {
    const newState = books(initStore, {
      type: RECEIVE_BOOKS,
      status: "success",
      payload: ["abc", "def"],
    });

    expect(newState).toStrictEqual({
      ...initStore,
      isFetching: false,
      data: ["abc", "def"],
    });
  });

  test('should return state of error upon receiving an action of type "RECIEVE_BOOKS" success error', () => {
    const newState = books(initStore, {
      type: RECEIVE_BOOKS,
      status: "error",
      payload: "err",
    });

    expect(newState).toStrictEqual({
      ...initStore,
      isFetching: false,
      error: "err",
    });
  });
});
