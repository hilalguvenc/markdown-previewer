import React, { useState } from "react";
import "./App.css";

const Editor = (props) => {
  return (
    <div className="editor-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        <span id="editor-text">Editor</span>
        <i className="fa fa-arrows-alt"></i>
      </div>
      <textarea id="editor" type="text" value = {props.text} onChange={props.onChange}></textarea>
    </div>
  );
};
export default Editor;
