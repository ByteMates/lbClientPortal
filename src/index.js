import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import Dashboard from "../src/Components/Dashboard/Dashboard";
import Home from "./Components/Main/Home";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
