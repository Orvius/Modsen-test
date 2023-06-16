import React from "react";
import "../css/BookItem.css";

const BookItem = (props) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img src={props.book.image} alt="book" />
      </div>
      <h2 className="book-category">{props.book.category}</h2>
      <h2 className="book-title">{props.book.title}</h2>
      <h2 className="book-author">{props.book.author}</h2>
    </div>
  );
};

export default BookItem;
