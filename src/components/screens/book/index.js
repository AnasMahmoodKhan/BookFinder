import React from "react";
import isEmpty from "lodash/isEmpty";
import "./book.css";
import { connect } from "react-redux";
import { getBookInfo } from "../../../actions/actions";
import { bindActionCreators } from "redux";

const createMarkup = (markup) => ({ __html: markup });

const Book = ({
  getBookInfo,
  bookInfo,
  isFetchingBookInfo,
  match: { params },
}) => {
  React.useEffect(() => {
    getBookInfo(params.id);
  }, [params]);
  let jsxStr = "";
  if (isFetchingBookInfo) {
    jsxStr = <p>Loading...</p>;
  }

  if (!isEmpty(bookInfo)) {
    let { title, subtitle, imageLinks, description } = bookInfo.volumeInfo;

    jsxStr = (
      <div className="book-card" data-test="book-card">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="book-card--body">
          <figure className="book-card--thumbnail">
            {imageLinks ? (
              <img
                src={imageLinks.thumbnail}
                className="img-responsive"
                alt={title}
              />
            ) : null}
          </figure>
          <p
            className="book-card--description"
            dangerouslySetInnerHTML={createMarkup(description)}
          />
        </div>
      </div>
    );
  }

  return (
    <div id="book" className="page">
      <div className="container">{jsxStr}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let { bookInfo, isFetchingBookInfo } = state.books;
  return {
    bookInfo,
    isFetchingBookInfo,
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

export default connect(mapStateToProps, mapDispatchToProps)(Book);
