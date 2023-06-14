import "./css/App.css";
import React,{useState}  from "react";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sorting, setSorting] = useState("relevance");

  const clearSearch = () => {
    
  }

  return (
   <div className="App"> 
      <Header
        setSearch={setSearch}
        setCategory={setCategory}
        setSorting={setSorting}
        clearSearch={clearSearch}
      />   
   </div> 
  );
}

export default App;