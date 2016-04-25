import React, {Component} from "react";

import HeaderStyle from './Header.css';
export default class Header extends Component{
  render(){
    return (
      <div className={HeaderStyle.head}>
        <div className={HeaderStyle.headMain}>
          <nav>
            <ul>
              <li><a href="javascript:;">HOME</a></li>
              <li><a href="javascript:;">ARTCLES</a></li>
              <li><a href="javascript:;">PROJECT</a></li>
              <li><a href="javascript:;">WORK</a></li>
              <li><a href="javascript:;">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
