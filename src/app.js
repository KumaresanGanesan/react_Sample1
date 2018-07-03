import React from "react";
import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
import Main from "./components/body/main";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header name="vivek" />
      <Main />
    </div>
  );
}

export default App;
