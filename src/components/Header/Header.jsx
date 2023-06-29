import "./Header.css";

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";

import SelectBlock from "../SelectBlock/SelectBlock";
import loupe from "../../assets/loupe.png";

function Header({searchBook}) {
  const { search, category, sorting, setSearch, setCategory, setSorting } =
    useContext(AppContext);

  const navigate = useNavigate();

  const getDataBook = () => {
    searchBook(search, category, sorting);

    navigate("/");
  };

  const SearchChange = (e) => {
    setSearch(e.target.value);
  };
  const KeyEnterDown = (e) => {
    if (e.key === "Enter") {
      getDataBook();
    }
  };
  const CategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const SortingChange = (e) => {
    setSorting(e.target.value);
  };

  const categoryOptions = [
    { value: "", label: "all" },
    { value: "art", label: "art" },
    { value: "biography", label: "biography" },
    { value: "computers", label: "computers" },
    { value: "history", label: "history" },
    { value: "medical", label: "medical" },
    { value: "poetry", label: "poetry" },
  ];

  const sortingOptions = [
    { value: "relevance", label: "relevance" },
    { value: "newest", label: "newest" },
  ];

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
          onChange={SearchChange}
          onKeyDown={KeyEnterDown}
        />
        <button className="search-btn" type="submit" onClick={getDataBook}>
          <img src={loupe} alt="search" />
        </button>
      </div>
      <div className="header__categories">
        <SelectBlock
          title="Categories"
          options={categoryOptions}
          onChange={CategoryChange}
        />
        <SelectBlock
          title="Sorting by"
          options={sortingOptions}
          onChange={SortingChange}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default Header;
