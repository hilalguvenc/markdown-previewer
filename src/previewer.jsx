import React, { useState } from "react";
import "./App.css";

function Previewer() {
  return (
    <div className="preview-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        Previewer
        <i className="fa fa-arrows-alt"></i>
      </div>
      <textarea id="preview" type="text"></textarea>
    </div>
  );
}
export default Previewer;
