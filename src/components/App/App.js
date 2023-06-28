import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import { AppContext } from "../AppContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import BookPage from "../BookPage/BookPage";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { search, category, sorting } = useContext(AppContext);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const mapBookItem = (item) => {
    const requestBook = {
      category: item.volumeInfo?.categories || [],
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors || [],
      image: item.volumeInfo.imageLinks?.thumbnail,
      description: item.volumeInfo.description,
      id: item.id,
    };

    return requestBook;
  };

  const searchBook = () => {
    setStartIndex(0);
    setBooks([]);
    setIsLoading(true);

    axios
      .get(
        `${API_URL}?q=intitle:${search}+subject:${category}&startIndex=${startIndex}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`
      )
      .then((response) => {
        setCount(response.data.totalItems);
        setBooks([]);

        const listBooks = response.data.items;

        if (Array.isArray(listBooks) && listBooks.length > 0) {
          const newBooks = listBooks.map(mapBookItem);

          setBooks(newBooks);
        }
        setIsLoading(false);
      })
      .catch(() => {
        const customError = new Error(
          "Произошла ошибка при выполнении запроса"
        );
        console.log(customError);
      });
  };

  const loadMore = () => {
    const newStartIndex = startIndex + 30;
    axios
      .get(
        `${API_URL}?q=intitle:${search}+subject:${category}&startIndex=${newStartIndex}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`
      )
      .then((response) => {
        const listBooks = response.data.items;

        if (Array.isArray(listBooks) && listBooks.length > 0) {
          const moreBooks = listBooks.map(mapBookItem);

          setBooks((prevBooks) => [...prevBooks, ...moreBooks]);
          setStartIndex(newStartIndex);
        }
      })
      .catch(() => {
        const customError = new Error(
          "Произошла ошибка при выполнении запроса"
        );
        console.log(customError);
      });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header searchBook={searchBook} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                books={books}
                count={count}
                loadMore={loadMore}
                loading={isLoading}
              />
            }
          />
          <Route path="/book/:bookId" element={<BookPage books={books} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
