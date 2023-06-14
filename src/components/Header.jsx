import React from "react";
import "../css/Header.css";

const Header = (props) => {
    return (
        <header className="header">
        <h1 className="header__title">Search for books</h1>
        <div className="header__search">
          <input 
            className="search-txt" 
            type="text" 
            name="search" 
            placeholder="Search..."
            value={props.search}
            onChange={(e) => {
              if (e.key === "Enter") {
                props.clearSearch();
              }
            }}
          />
          <button 
            className="search-btn" 
            type="submit"
            onClick={props.clearSearch}
          >
            <img src="../../images/loupe.png" alt="search"/>
          </button>
        </div>
        <div className="header__categories">
          <div className="select__block">
            <h2 className="select-txt">Categories</h2>
            <select 
              className="select-opt" 
              name="category"
              onChange={(e) => {
                props.setCategory(e.target.value);
              }}
            >
              <option selected value="all">all</option>
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
                props.setSorting(e.target.value);
              }}
            >
              <option selected value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </header>
    )
}

export default Header;