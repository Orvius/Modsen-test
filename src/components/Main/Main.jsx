import React from "react";
import "./Main.css";
import BookItem from "../BookItem/BookItem";
import { v4 as uuidv4 } from "uuid";

const Main = (props) => {
  const loadMore = () => {
    props.loadMore();
  };
  return (
    <main className="main">
      <div className="container">
        {props.count !== 0 ? (
          <h2 className="main__books-count">Found {props.count} results</h2>
        ) : null}
        <div className="main__books-block">
          {props.books?.map((surrentBook) => (
            <BookItem key={uuidv4()} book={surrentBook} />
          ))}
        </div>
        {props.count !== 0 ? (
          <button className="main__btn-load" onClick={loadMore}>
            Load more
          </button>
        ) : null}
      </div>
    </main>
  );
};

export default Main;
