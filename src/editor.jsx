import React, { useState } from "react";
import "./App.css";

const Editor = (props) => {
  const [editorWiden, setEditorWiden] = useState(false);

  const change = () => {
    setEditorWiden(!editorWiden);
  };
  return (
    <div className="editor-wrap">
      <div className="toolbar">
        <i className="fab fa-free-code-camp"></i>
        <span id="editor-text">Editor</span>
        {editorWiden == false ? (
          <i className="fa fa-arrows-alt" onClick={change}></i>
        ) : (
          <i class="fas fa-compress-alt" onClick={change}></i>
        )}
      </div>
      <textarea
        id="editor"
        type="text"
        value={props.text}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};
export default Editor;
