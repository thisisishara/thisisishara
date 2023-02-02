import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configs } from "./config";
import Maintenance from "./pages/maintenance";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {configs?.maintenance ? <Maintenance /> : <App />}
  </React.StrictMode>
);

