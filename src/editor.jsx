import React, { useState } from "react";
import "./App.css";

function Editor() {
  return (
    <div className="editor-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        Editor
        <button>
          <i className="fa fa-arrows-alt"></i>
        </button>
      </div>
      <textarea id="editor" type="text"></textarea>
    </div>
  );
}
export default Editor;
