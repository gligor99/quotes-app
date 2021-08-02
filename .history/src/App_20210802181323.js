import React, { useEffect, useState } from "react";
import "./App.css";
import Quote from "./Quote";

// API URL
const url = "https://api.quotable.io/random";

function App() {
  const [quotes, setQuotes] = useState([]);

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes.data());
  };

  useEffect(() => {
    getQuote();
  });

  const getNewQuote = () => {
    getQuote();
  };

  return (
    <div className="App">
      <div class="blockquote-wrapper">
        <div class="blockquote">
          
        </div>
      </div>
    </div>
  );
}

export default App;
