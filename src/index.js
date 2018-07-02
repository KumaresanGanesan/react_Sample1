import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header name="vivek" />
      <h1>Hello KumaresaN</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
