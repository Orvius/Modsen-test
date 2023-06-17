import React from "react";
import "./Main.css";
import BookItem from "../BookItem/BookItem";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <h2 className="main__books-count">Found {props.count} results</h2>
        <div className="main__books-block">
          {props.books?.map((surrentBook) => (
            <BookItem key={surrentBook.key} book={surrentBook} />
          ))}
        </div>
        <button className="main__btn-load">Load more</button>
      </div>
    </main>
  );
};

export default Main;
