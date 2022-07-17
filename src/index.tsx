import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { Store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
