import React from "react";
import {Router, Route} from "react-router";
import App from "../components/App";
import About from "../components/About";
import List from "../components/List";


let routes = (
  <Route path="/" component={App}>
    <Route path="about" component={About}/>
    <Route path="list" component={List}/>
  </Route>
);

export default routes;
