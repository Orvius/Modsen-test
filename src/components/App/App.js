import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import { AppProvider } from "../AppContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import BookPage from "../BookPage/BookPage";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //Не успел разобраться с контекстом
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const searchBook = (search, category, sorting) => {
    setStartIndex(0);
    setBooks([]);
    setSearch(search);
    setCategory(category);
    setSorting(sorting);
    setIsLoading(true);

    axios
      .get(`${API_URL}?q=intitle:${search}+subject:${category}&startIndex=${startIndex}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`)
      .then((response) => {
        setCount(response.data.totalItems);
        setBooks([]);

        const listBooks = response.data.items;

        if (Array.isArray(listBooks) && listBooks.length > 0) {
          setBooks(
            listBooks.map((item) => {
              const requestBook = {
                category: item.volumeInfo?.categories || [],
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors || [],
                image: item.volumeInfo.imageLinks?.thumbnail,
                description: item.volumeInfo.description,
                id: item.id,
              };

              return requestBook;
            })
          );
        }
        setIsLoading(false);
      })
      .catch(() => {
        const customError = new Error("Произошла ошибка при выполнении запроса");
        console.log(customError);
      });
  };

  const loadMore = () => {
    const newStartIndex = startIndex + 30;
    axios
      .get(`${API_URL}?q=intitle:${search}+subject:${category}&startIndex=${newStartIndex}&maxResults=30&orderBy=${sorting}&key=${API_KEY}`)
      .then((response) => {
        const listBooks = response.data.items;

        if (Array.isArray(listBooks) && listBooks.length > 0) {
          const moreBooks = listBooks.map((item) => {
            const requestBook = {
              category: item.volumeInfo?.categories,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              image: item.volumeInfo.imageLinks?.thumbnail,
              description: item.volumeInfo.description,
              id: item.id,
            };

            return requestBook;
          });

          setBooks((prevBooks) => [...prevBooks, ...moreBooks]);
          setStartIndex(newStartIndex);
        }
      })
      .catch(() => {
        const customError = new Error("Произошла ошибка при выполнении запроса");
        console.log(customError);
      });
  };

  return (
    <BrowserRouter>
    <AppProvider>
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
    </AppProvider>
        
    </BrowserRouter>
  );
}

export default App;