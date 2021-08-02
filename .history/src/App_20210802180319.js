import React, { useState } from "react";
import "./App.css";

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
      <div className="blockquote-wrapper">
        <h1>Intuitive design happens when current knowledge is the same as the target knowledge.</h1>
      </div>
    </div>
  );
}

export default App;
