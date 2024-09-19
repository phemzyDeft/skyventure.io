import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
