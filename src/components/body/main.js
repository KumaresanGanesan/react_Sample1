import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import SearchJob from "./searchJobs";
import ShortList from "./shortListUser";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/search" component={SearchJob} />
      <Route path="/shortList" component={ShortList} />
    </Switch>
  </main>
);

export default Main;
