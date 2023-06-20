import React from "react";
import "./BookItem.css";

import undefinedBook from "../../assets/undefined_book.png";

const BookItem = ( {book} ) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img
          src={
            book.image === undefined
              ? {undefinedBook}
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
