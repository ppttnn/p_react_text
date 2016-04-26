import React, {Component} from "react";

import Header from '../../components/common/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import ButtonStyle from '../../less/button.less';
// import　AppStyle from './App.css';
import　AppLess from './App.less';
// import　AppScss from './App.scss';
export default class App extends Component{
  render(){
    return (
      <div className={AppLess.app}>
        <Header/>
        <Buttons/>
        {this.props.children}
      </div>
    );
  }
}
