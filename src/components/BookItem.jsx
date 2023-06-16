import React from "react";
import "../css/BookItem.css";

const BookItem = (props) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <img src={props.book.image === undefined ? props.book.image === "../../image/undefined_book.png" : props.book.image} alt="book" />
      </div>
      <h2 className="book-category">{props.book.category}</h2>
      <h2 className="book-title">{props.book.title.length > 70 ? props.book.title.substring(0, 70) + "..." : props.book.title}</h2>
      <h2 className="book-author">{props.book?.author?.length > 1 ? props.book?.author?.join(", ") : props.book?.author?.[0]}</h2>
    </div>
  );
};

export default BookItem;
