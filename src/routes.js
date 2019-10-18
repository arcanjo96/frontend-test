import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
