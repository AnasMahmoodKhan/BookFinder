import axios from "axios";
export default {
  fetchBooks: async (query) => {
    return await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res)
      .catch();
  },
  fetchBookInfo: async (ID) => {
    return await axios
      .get(`https://www.googleapis.com/books/v1/volumes/${ID}`)
      .then((res) => res)
      .catch();
  },
};
