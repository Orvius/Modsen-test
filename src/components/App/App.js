import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  const searchBook = (search, category, sorting) => {
    setSearch(search);
    setCategory(category);
    setSorting(sorting);

    axios
      .get(
        API_URL +
          "?q=intitle:" +
          search +
          "+subject:" +
          category +
          "&startIndex=" +
          startIndex +
          "&maxResults=30&orderBy=" +
          sorting +
          "&key=" +
          API_KEY
      )
      .then(function (responce) {
        setCount(responce.data.totalItems);
        setBooks([]);

        const listBooks = responce.data.items;

        if (Array.isArray(listBooks) && listBooks.length > 0) {
          setBooks(
            listBooks.map((item) => {
              const requestBook = {
                category: item.volumeInfo?.categories,
                title: item.volumeInfo.title,
                author: item.volumeInfo.authors,
                image: item.volumeInfo.imageLinks?.thumbnail,
                description: item.volumeInfo.description,
              };

              return requestBook;
            })
          );
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const loadMore = () => {
    const newStartIndex = startIndex + 30;
    axios
      .get(
        API_URL +
          "?q=intitle:" +
          search +
          "+subject:" +
          category +
          "&startIndex=" +
          newStartIndex +
          "&maxResults=30&orderBy=" +
          sorting +
          "&key=" +
          API_KEY
      )
      .then(function (responce) {
        const listBooks = responce.data.items;

        if (listBooks.length > 0) {
          const moreBooks = listBooks.map((item) => {
            const requestBook = {
              category: item.volumeInfo?.categories,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              image: item.volumeInfo.imageLinks?.thumbnail,
              description: item.volumeInfo.description,
            };

            return requestBook;
          });

          setBooks((prevBooks) => [...prevBooks, ...moreBooks]);
          setStartIndex(newStartIndex);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="App">
      <Header searchBook={searchBook} />
      <Main books={books} count={count} loadMore={loadMore} />
    </div>
  );
}

export default App;
