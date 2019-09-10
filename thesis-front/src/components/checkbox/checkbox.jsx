import React, {Component} from 'react';
import {css} from "glamor";
import {
  containerStyle, getItemCheckboxStyle, itemCheckboxContainerStyle,
  itemTextContainerStyle,
} from "./checkbox_style";

export default class CheckboxComponent extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {id, name, isSelected, onItemClickCallback} = this.props;
    return (
      <div className={css(containerStyle, this.props.style)} onClick={() => onItemClickCallback()} key={id}>
        <div className={itemCheckboxContainerStyle}>
          <div className={getItemCheckboxStyle(isSelected)}/>
        </div>
        <div className={itemTextContainerStyle}>{name}</div>
      </div>
    );
  }
}