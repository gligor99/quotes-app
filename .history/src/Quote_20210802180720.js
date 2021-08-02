import React from "react";
import modules from './Quote.module.css'

function Quote() {
  return (
    <div className={modules.blockquote-wrapper}>
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
