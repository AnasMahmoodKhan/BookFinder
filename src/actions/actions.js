import axios from "axios";
import { REQUEST_BOOKS, RECEIVE_BOOKS, REQUEST_BOOK_INFO, RECEIVE_BOOK_INFO } from "./actionTypes";

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
  return function (dispatch) {
    dispatch(requestBooks(query));
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    return axios
      .get(url)
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
  return function (dispatch) {
    dispatch(requestBookInfo(ID));
    const url = `https://www.googleapis.com/books/v1/volumes/${ID}`;
    return axios
      .get(url)
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