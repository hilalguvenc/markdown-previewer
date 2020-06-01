import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="editor-wrap">
        <div className="toolbar">
          <i className="fab fa-free-code-camp"></i>
          Editor
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea id="editor" type="text"></textarea>
      </div>
      <div className="preview-wrap">
        <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
          Previewer
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea id="preview" type="text"></textarea>
      </div>
    </div>
  );
}
export default App;
