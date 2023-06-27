import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppProvider({ children }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("relevance");

  const contextValue = useMemo(() => ({
    search,
    category,
    sorting,
    setSearch,
    setCategory,
    setSorting,
  }), [search, category, sorting]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export { AppContext, AppProvider };