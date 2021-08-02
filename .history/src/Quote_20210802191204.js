import React from "react";

const Quote = ({ quotes, getNewQuote }) => {
  const { content, author } = quotes;
  return (
    <div>
      <div className="blockquote-wrapper">
        <div className="blockquote">
          <h1>{content}</h1>
          <h4>&mdash; {author}</h4>
          <button className="fill" onClick={getNewQuote}>
            next quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
