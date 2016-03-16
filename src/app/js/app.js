import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory} from "react-router";
// import routes from "./routes/Root";

class App extends Component{
  render(){
    return (
      <div>App</div>
    );
  }
}

class About extends Component{
  render(){
    return <div>About</div>
  }
}

class Users extends Component{
  render(){
    return <div>Users</div>
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}/>
    </Route>
  </Router>
    ),document.getElementById('main'));
