import "./css/App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState("0");

  const API_KEY = "AIzaSyC1IP0CY0jJ7e8HpAlXI_E-KLZUbVG3KGk";
  const API_URL = "https://www.googleapis.com/books/v1/volumes";

  const searchBook = (search, category, sorting) => {
    axios.get(API_URL+"?q=intitle:"+search+"+subject:"+category+"&startIndex=0&maxResults=30&orderBy="+sorting +"&key="+API_KEY)
    .then(function (responce) {
      setCount(responce.data.totalItems);
      setBooks([]);

      const listBooks = responce.data.items;

      if (listBooks.length > 0) {
        setBooks(
          listBooks.map((item) => {
            const requestBook = {
              category: item.volumeInfo?.categories,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors,
              image: item.volumeInfo.imageLinks?.thumbnail,
            }

            return requestBook;
          })
        )
      }
    })
    .catch((e) => {
      console.error(e);
    });
  };

  return (
    <div className="App">
      <Header
        searchBook={searchBook}
      />
      <Main 
        books={books}
        count={count}
      />
    </div>
  );
}

export default App;
