import API from "../utils/API";
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_BOOK_INFO,
  RECEIVE_BOOK_INFO,
} from "./actionTypes";

export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query,
});

export const receiveBooks = ({ status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload,
});

export const requestBookInfo = (ID) => ({
  type: REQUEST_BOOK_INFO,
  ID,
});

export const receiveBookInfo = ({ status, payload }) => ({
  type: RECEIVE_BOOK_INFO,
  status,
  payload,
});

export const getBooks = (query) => {
  return async function (dispatch) {
    dispatch(requestBooks(query));
    await API.fetchBooks(query)
      .then((response) => {
        dispatch(
          receiveBooks({
            status: "success",
            payload: response.data,
          })
        );
      })
      .catch(() => {
        dispatch(
          receiveBooks({
            status: "error",
            payload: "error",
          })
        );
      });
  };
};

export const getBookInfo = (ID) => {
  return async function (dispatch) {
    dispatch(requestBookInfo(ID));
    await API.fetchBookInfo(ID)
      .then((response) => {
        dispatch(
          receiveBookInfo({
            status: "success",
            payload: response.data,
          })
        );
      })
      .catch(() => {
        dispatch(
          receiveBookInfo({
            status: "error",
            payload: "error",
          })
        );
      });
  };
};
