import React, {Component} from 'react';
import {containerStyle, getInputContainerStyle, getLabelContainerStyle, spaceContainerStyle} from "./input_style";

export default class InputTextComponent extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {label, type, inputToTextRatio, labelWidth} = this.props;
    return (
      <div className={containerStyle}>
        <div className={getLabelContainerStyle(labelWidth, inputToTextRatio)}>{label}</div>
        <div className={spaceContainerStyle}/>
        <input className={getInputContainerStyle(labelWidth, inputToTextRatio)} type={type}/>
      </div>
    );
  }
}