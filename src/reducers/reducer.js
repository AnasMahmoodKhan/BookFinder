import {
  RECEIVE_BOOKS,
  RECEIVE_BOOK_INFO,
  REQUEST_BOOKS,
  REQUEST_BOOK_INFO,
} from "../actions/actionTypes";

const initalState = {
  query: "",
  isFetching: false,
  data: {},
  error: "",
  isFetchingBookInfo: false,
  bookInfo: {},
  errorBookInfo: "",
};

export const books = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === "success" ? action.payload : initalState.data,
        error: action.status === "error" ? action.payload : initalState.error,
      });
    case REQUEST_BOOK_INFO:
      return Object.assign({}, state, {
        isFetchingBookInfo: true,
        ID: action.ID,
      });
    case RECEIVE_BOOK_INFO:
      return Object.assign({}, state, {
        isFetchingBookInfo: false,
        bookInfo:
          action.status === "success" ? action.payload : initalState.data,
        errorBookInfo:
          action.status === "error" ? action.payload : initalState.error,
      });
    default:
      return state;
  }
};

export default books;
