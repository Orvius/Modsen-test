import React from "react";
import "./BookItem.css";

const BookItem = ( {book} ) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img
          src={
            book.image === undefined
              ? "../../images/undefined_book.png"
              : book.image
          }
          alt="book"
        />
      </div>
      <h2 className="book-category">{book.category}</h2>
      <h2 className="book-title">{book.title}</h2>
      <h2 className="book-author">
        {book.author?.length > 1
          ? book.author?.join(", ")
          : book.author?.[0]}
      </h2>
    </div>
  );
};

export default BookItem;
