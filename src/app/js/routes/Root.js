import React from "react";
import {Router, Route} from "react-router";
import App from "../containers/App/App";
import About from "../containers/About/About";
import List from "../containers/List/List";
// import {
//   App,
//   About,
//   List
// } from '../containers';

let routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="list" component={List}/>
  </Route>
);

export default routes;
