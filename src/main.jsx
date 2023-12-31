import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoggedInUserProvider } from "./context/loggedInUserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoggedInUserProvider>
      <App />
    </LoggedInUserProvider>
  </BrowserRouter>
);
