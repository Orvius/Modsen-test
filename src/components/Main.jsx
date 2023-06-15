import React, { useState } from "react";
import "../css/Main.css";
import BookItem from "./BookItem";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <h2 className="main__books-count">Found {props.count} results</h2>
        <div className="main__books-block">
          {Array.isArray(props.books) && props.books.map((book) => (
            <BookItem key={book.key} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
