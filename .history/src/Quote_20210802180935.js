import React from "react";
import './Quote.css'

function Quote({data}) {
  return (
    <div className='blockquote-wrapper'>
      <div className="blockquote">
        <h1>
          Intuitive design happens when current knowledge is the same as the
          target knowledge.
        </h1>
        <h4>Jared SpoolWeb Site Usability: A Designer's Guide</h4>
      </div>
    </div>
  );
}

export default Quote;
