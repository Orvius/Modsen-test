import React from "react";
import { Link } from "react-router-dom";
import "./BookItem.css";

import undefinedBook from "../../assets/undefined_book.png";

const BookItem = ({ book: { author, title, category, image, id } }) => {
  return (
    <div className="book-block">
      <div className="book-img-container">
        <Link to={`/book/${id}`} >
          <img src={image === undefined ? undefinedBook : image} alt="book" />
        </Link>
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
