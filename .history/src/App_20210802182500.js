import React, { useEffect, useState } from "react";
import "./App.css";

// API URL
const url = "https://api.quotable.io/random";

function App() {
  const [quotes, setQuotes] = useState([]);

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const { content, author } = quotes;

  return (
    <div className="App">
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>{content}</h1>
          <h4>{`&mdash${author}`}</h4>
          <button onClick={getNewQuote}>next quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
