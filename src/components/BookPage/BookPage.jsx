import "./BookPage.css";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import undefinedBook from "../../assets/undefined_book.png";


function BookPage({ books }) {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const book = books.find((item) => item.id === bookId);

  return (
    <main className="main">
      <div className="container">
        <button className="current-book__back-btn" onClick={goBack} type="button">
          Back
        </button>
        <div className="current-book__background">
          <div className="img-container">
            <img
              src={book?.image === undefined ? undefinedBook : book.image}
              alt="book"
            />
          </div>
        </div>
        <div className="current-book__txt">
          <h2 className="current-book-category">{book?.category}</h2>
          <h2 className="current-book-title">{book?.title}</h2>
          <h2 className="current-book-author">
            {book?.author?.length > 1
              ? book?.author?.join(", ")
              : book?.author?.[0]}
          </h2>
          <p className="current-book-about">
            {book?.description === undefined ? "No description" : book.description}
          </p>
        </div>
      </div>
    </main>
  );
};

BookPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
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
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookPage;
