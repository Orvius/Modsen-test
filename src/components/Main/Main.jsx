import React from "react";
import "./Main.css";
import BookItem from "../BookItem/BookItem";
import { v4 as uuidv4 } from "uuid";

const Main = ({props: {loading, count, books} }) => {
  const loadMore = () => {
    loadMore();
  };
  return (
    <main className="main">
      <div className="container">
        {loading ? (
          <div className="main__load"><div className="lds-dual-ring" /></div>
        ) : (
          <h2 className="main__books-count">Found {count} results</h2>
        )}
        <div className="main__books-block">
          {books?.map((surrentBook) => (
            <BookItem key={uuidv4()} book={surrentBook} />
          ))}
        </div>
        {books.length !== 0 ? (
          <button className="main__btn-load" onClick={loadMore}>
            Load more
          </button>
        ) : null}
      </div>
    </main>
  );
};

export default Main;
