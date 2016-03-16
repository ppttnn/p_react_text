import React from "react";
import {Router, Route} from "react-router";
import Index from "../components/Index";
import Main from "../components/Main";

let routes = (
    <Route path="/" name="index" component={Index}>
      <Route path="main"name="main" component={Main}/>
    </Route>
);

export default routes;
