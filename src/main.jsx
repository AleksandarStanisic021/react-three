import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const fun = () => {
  return "X";
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hi React!</h1>
    {((e) => "x")()}
  </StrictMode>,
);
