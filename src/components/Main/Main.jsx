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
        {props.loading ? (
          <div className="main__load"><div className="lds-dual-ring" /></div>
        ) : (
          <h2 className="main__books-count">Found {props.count} results</h2>
        )}
        <div className="main__books-block">
          {props.books?.map((surrentBook) => (
            <BookItem key={uuidv4()} book={surrentBook} />
          ))}
        </div>
        {props.books.length !== 0 ? (
          <button className="main__btn-load" onClick={loadMore}>
            Load more
          </button>
        ) : null}
      </div>
    </main>
  );
};

export default Main;
