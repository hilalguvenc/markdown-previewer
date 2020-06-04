import React, { useState } from "react";
import "./App.css";

function Editor(props) {
  const [value, setValue] = useState(
    "# Welcome to my React Markdown Previewer!"
  );

  const changeTextArea = (event) => {
    setValue({ value: event.target.value });
  };

  return (
    <div className="editor-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        Editor
        <i className="fa fa-arrows-alt"></i>
      </div>
      <textarea
        id="editor"
        type="text"
        value={value}
        onChange={changeTextArea}
      ></textarea>
    </div>
  );
}
export default Editor;
