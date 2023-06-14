import React from "react";
import "../css/Header.css";

const Header = () => {
    return (
        <header className="header">
        <h1 className="header__title">Search for books</h1>
        <div className="header__search">
          <input className="search-txt" type="text" name="search" placeholder="Search..."/>
          <button className="search-btn" type="submit">
            <img src="../../images/loupe.png" alt="search"/>
          </button>
        </div>
        <div className="header__categories">
          <div className="select__block">
            <h2 className="select-txt">Categories</h2>
            <select className="select-opt" name="categories">
              <option selected value="0">all</option>
              <option value="1">art</option>
              <option value="2">biography</option>
              <option value="3">computers</option>
              <option value="4">history</option>
              <option value="5">medical</option>
              <option value="6">poetry</option>
            </select>
          </div>
          <div className="select__block">
            <h2 className="select-txt">Sorting by</h2>
            <select className="select-opt" name="sorting-by">
              <option selected value="0">relevance</option>
              <option value="1">newest</option>
            </select>
          </div>
        </div>
      </header>
    )
}

export default Header;