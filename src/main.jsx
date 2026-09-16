import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./comps/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hi React!</h1>
    {((e) => "x")()}
    <App />
  </StrictMode>,
);
