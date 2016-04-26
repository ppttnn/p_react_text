import React, {Component} from "react";

import ButtonsStyle from './Buttons.less';
export default class Buttons extends Component{
  render(){
    return (
      <div className={ButtonsStyle.displayContent}>
        <a className="button" href="javascript:;">LINK</a>
        <a className="button" href="javascript:;">LONG BUTTON</a>
        <a className="button" href="javascript:;">logn button</a>
        <a className="button" href="javascript:;">这是一个按钮</a>
        <button>BUTTON</button>
        <input type="button" value="input" />
        <input type="submit" value="submit" />
        <input type="reset" value="reset" />
      </div>
    );
  }
}
