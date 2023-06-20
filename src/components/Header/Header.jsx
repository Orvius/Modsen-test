import React, { useState } from "react";
import "./Header.css";

import loupe from "../../assets/loupe.png";

const Header = (props) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const getDataBook = () => {
    props.searchBook(search, category, sorting);
  };

  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <div className="header__search">
        <input
          className="search-txt"
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getDataBook();
            }
          }}
        />
        <button className="search-btn" type="submit" onClick={getDataBook}>
          <img src={loupe} alt="search" />
        </button>
      </div>
      <div className="header__categories">
        <div className="select__block">
          <h2 className="select-txt">Categories</h2>
          <select
            className="select-opt"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className="select__block">
          <h2 className="select-txt">Sorting by</h2>
          <select
            className="select-opt"
            name="sorting-by"
            onChange={(e) => {
              setSorting(e.target.value);
            }}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
