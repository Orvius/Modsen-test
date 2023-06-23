import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookPage.css";
import undefinedBook from "../../assets/undefined_book.png";

const BookPage = ({ books }) => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const book = books.find((book) => book.id === bookId);

  return (
    <main className="main">
      <div className="container">
        <button className="current-book__back-btn" onClick={goBack}>Back</button>
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
          <h2 className="current-book-author">{book?.author}</h2>
          <p className="current-book-about">{book?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default BookPage;
