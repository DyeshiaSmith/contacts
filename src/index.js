import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Destructure named export
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
