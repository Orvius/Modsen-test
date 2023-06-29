import "./Main.css"

import React from "react"
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid"

import BookItem from "../BookItem/BookItem"

function Main({ loading, count, books, loadMore }) {
  const handleLoadMore = () => {
    loadMore();
  }

  return (
    <main className="main">
      <div className="container">
        {loading ? (
          <div className="main__load">
            <div className="lds-dual-ring" />
          </div>
        ) : (
          <h2 className="main__books-count">Found {count} results</h2>
        )}
        <div className="main__books-block">
          {books?.map((currentBook) => (
            <BookItem key={uuidv4()} book={currentBook} />
          ))}
        </div>
        {books.length !== 0 && (
          <button className="main__btn-load" onClick={handleLoadMore} type="button">
            Load more
          </button>
        )}
      </div>
    </main>
  )
}

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Main