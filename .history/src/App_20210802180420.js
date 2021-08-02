import React, { useState } from "react";
import "./App.css";
import Quote from "./Quote";

// API URL
const url = "https://api.quotable.io/random";

function App() {
  const [quotes, setQuotes] = useState([]) 

  const getQuote = () => {
    fetch(url)
      .then((response) => response.JSON())
      .then((data) => setQuotes.data());
  };


  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
