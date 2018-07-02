import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SearchJobs from "./components/body/searchJobs";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header name="vivek" />
      <h1>Hello KumaresaN</h1>
      <SearchJobs />
      <Footer name="vivek" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
