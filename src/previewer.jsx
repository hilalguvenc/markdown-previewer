import React, { useState } from "react";
import "./App.css";
import marked from "marked";

const Previewer = (props) => {
  const rawMarkup = () => {
    let rawMarkup = marked(props.deger, { sanitize: true });
    return { __html: rawMarkup };
  };
  return (
    <div className="preview-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        <span id="previewer-text">Previewer</span>
        <i className="fa fa-arrows-alt"></i>
      </div>
      <span id="markup" dangerouslySetInnerHTML={rawMarkup()}/>
      <textarea id="preview" type="text">
      </textarea>
    </div>
  );
};
export default Previewer;
