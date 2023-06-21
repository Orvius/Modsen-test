import React from "react";
import "./BookItem.css";

import undefinedBook from "../../assets/undefined_book.png";

const BookItem = ({ book: { author, title, category, image } }) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img src={image === undefined ? undefinedBook : image} alt="book" />
      </div>
      <h2 className="book-category">{category}</h2>
      <h2 className="book-title">{title}</h2>
      <h2 className="book-author">
        {author?.length > 1 ? author?.join(", ") : author?.[0]}
      </h2>
    </div>
  );
};

export default BookItem;
