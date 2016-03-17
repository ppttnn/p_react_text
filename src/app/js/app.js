import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory} from "react-router";
import routes from "./routes/Root";

ReactDOM.render((<Router routes={routes} history={browserHistory} />),document.getElementById('main'));
