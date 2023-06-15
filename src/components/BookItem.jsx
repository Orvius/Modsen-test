import React from "react";
import "../css/BookItem.css";

const BookItem = ( {book} ) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img src={book.image} alt="book" />
      </div>
      <h2 className="book-category">{book.category}</h2>
      {<h2 className="book-title">{book.title}</h2>}
      <h2 className="book-author">{book.author}</h2>
    </div>
  );
};

export default BookItem;
