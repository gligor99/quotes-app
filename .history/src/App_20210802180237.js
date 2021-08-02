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
     <div class="blockquote-wrapper">
  <div class="blockquote">
    <h1>
     Intuitive design happens when <span style="color:#ffffff">current knowledge</span> is the same as the <span style="color:#ffffff">target knowledge.</span>
     </h1>
    <h4>&mdash;Jared Spool<br><em>Web Site Usability: A Designer's Guide</em></h4>
  </div>
</div>
    </div>
  );
}

export default App;
