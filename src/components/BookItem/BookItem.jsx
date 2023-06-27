import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./BookItem.css";

import undefinedBook from "../../assets/undefined_book.png";

function BookItem({ book }) {
  const { author, title, category, image, id } = book || {};

  return (
    <div className="book-block">
      <div className="book-img-container">
        <Link to={`/book/${id}`}>
          <img src={image === undefined ? undefinedBook : image} alt="book" />
        </Link>
      </div>
      <h2 className="book-category">{Array.isArray(category) ? category.join(", ") : category}</h2>
      <h2 className="book-title">{title}</h2>
      <h2 className="book-author">
        {author?.length > 1 ? author?.join(", ") : author?.[0]}
      </h2>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

BookItem.defaultProps = {
  book: {},
};

export default BookItem;
