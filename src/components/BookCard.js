import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const BookCard = ({ book }) => {
  let { title, subtitle, imageLinks, description } = book.volumeInfo;
  return (
    <div
      className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 text-center"
      data-test="BookCard"
    >
      <Card>
        {imageLinks ? (
          <Card.Img variant="top" src={imageLinks.thumbnail} />
        ) : null}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <Card.Text className="book--description">{description}</Card.Text>
          <Link className="book" to={`/book/${book.id}`}>
            View
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookCard;
