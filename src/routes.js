import React from "react";
import { Route, Switch } from "react-router-dom";
import Book from "./components/screens/book/index";
import Home from "./components/screens/home/index";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/book/:ID" component={Book} />
  </Switch>
);
