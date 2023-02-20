import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./progress.css";
import "./assets/loadereffect.css"
import "./assets/navBarIcon.css"
import "./assets/buttons.css"
import "animate.css";
import "./assets/imageeffect.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
