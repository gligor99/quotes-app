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

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;

  return (
    <div className="App">
      <div class="blockquote-wrapper">
        <div class="blockquote">
          <h1>{content}</h1>
          <h4>{author}</h4>
        </div>
      </div>
      <button>next quote</button>
    </div>
  );
}

export default App;
