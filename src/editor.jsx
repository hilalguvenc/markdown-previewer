import React, { useState } from "react";
import "./App.css";

const Editor = (props) => {
  return (
    <div className="editor-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        Editor
        <i className="fa fa-arrows-alt"></i>
      </div>
      <textarea id="editor" type="text" value = {props.text}></textarea>
    </div>
  );
};
export default Editor;
