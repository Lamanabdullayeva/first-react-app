import React from "react"; // React
import ReactDOM from "react-dom/client"; // React’s library to talk to web browsers (React DOM)
import "./index.css"; // the styles for your components
import App from "./App"; // the component you created in App.js
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
