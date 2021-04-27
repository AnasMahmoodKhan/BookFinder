import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getBooks, receiveBooks, requestBooks } from "./actions";
import { RECEIVE_BOOKS, REQUEST_BOOKS } from "./actionTypes";

describe("test for actions dispatch", () => {
  let store;
  beforeEach(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore({
      query: "",
      isFetching: false,
      data: {},
      error: "",
    });
  });

  test("for requestBooks action dispatch", () => {
    const expectedActions = [{ type: REQUEST_BOOKS, query: "xyz" }];
    store.dispatch(requestBooks("xyz"));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("for receiveBooks `status = success` action dispatch", () => {
    const expectedActions = [
      { type: RECEIVE_BOOKS, status: "success", payload: [] },
    ];
    store.dispatch(receiveBooks({ status: "success", payload: [] }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("for receiveBooks `status = error` action dispatch", () => {
    const expectedActions = [
      { type: RECEIVE_BOOKS, status: "error", payload: [] },
    ];
    store.dispatch(receiveBooks({ status: "error", payload: [] }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  describe("test for getBooks api call", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    test("for getBooks api call when success", () => {
      const data = [
        {
          name: "abc",
          title: "xyz",
        },
      ];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: data,
        });
      });
      const expectedActions = [
        { type: REQUEST_BOOKS, query: "abc" },
        { type: RECEIVE_BOOKS, status: "success", payload: data },
      ];

      return store.dispatch(getBooks("abc")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    test("for getBooks api call when error", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: "error",
        });
      });
      const expectedActions = [
        { type: REQUEST_BOOKS, query: "abc" },
        { type: RECEIVE_BOOKS, status: "error", payload: "error" },
      ];

      return store.dispatch(getBooks("abc")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
