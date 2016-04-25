import React, {Component} from "react";

import Header from './common/Header';

import　AppStyle from './App.css';
export default class App extends Component{
  render(){
    return (
      <div className={AppStyle.app}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
