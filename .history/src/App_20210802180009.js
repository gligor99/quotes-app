import React from 'react'
import './App.css';

const url = "https://api.quotable.io/random";

const getQuote = () => {
  fetch(url)
  .then((response) => response.JSON())
  .then((data) => setQuotes.data())
}

function App() {
  return (
    <div className="App">
      <h1>radi</h1>
    </div>
  );
}

export default App;
