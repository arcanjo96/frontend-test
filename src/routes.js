import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
