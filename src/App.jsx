import React, { useState } from "react";
import "./App.css";
import Previewer from "./previewer";
import Editor from "./editor";

function App() {
  return (
    <div>
      <Editor />
      <Previewer />
    </div>
  );
}
export default App;
