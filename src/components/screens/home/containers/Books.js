import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import BookCard from "../../../BookCard";
import { getBookInfo } from "../../../../actions/actions";
import { bindActionCreators } from "redux";

const renderBooksList = (data, query, getBookInfo) => {
  const ViewClickHandler = (ID) => {
    getBookInfo(ID);
  };

  if (isEmpty(data)) {
    return null;
  }
  let { items: books, totalItems } = data;
  return (
    <>
      <h3>Search results for: {query}</h3>
      <p>Total results: {totalItems}</p>
      <div className="row">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            handleViewClick={ViewClickHandler}
          />
        ))}
      </div>
    </>
  );
};

const Books = ({ data, isFetching, query, error, getBookInfo }) => {
  let jsxStr = "";

  if (isFetching) {
    jsxStr = <p>Loading...</p>;
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error);
  } else {
    jsxStr = renderBooksList(data, query, getBookInfo);
  }
  return <div className="container">{jsxStr}</div>;
};

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books;
  return {
    data,
    isFetching,
    query,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getBookInfo,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
