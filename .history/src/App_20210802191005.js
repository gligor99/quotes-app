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
      {/* <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>{content}</h1>
          <h4>&mdash; {author}</h4>
          <button className="fill" onClick={getNewQuote}>
            next quote
          </button>
        </div>
      </div> */}
      <Quote {...quotes} getNewQuote={getNewQuote}/>
    </div>
  );
}

export default App;
