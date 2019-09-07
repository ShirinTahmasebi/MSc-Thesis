import React, {Component} from 'react';
import {
  itemCheckboxContainerStyle,
  getItemCheckboxStyle,
  getItemContainerStyle,
  itemTextContainerStyle,
} from "./dual_multi_selection_style";

export default class DualMultiSelectionItemComponent extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {id, name, isSelected, isOdd, isLast, onItemClickCallback} = this.props;
    return (
      <div className={getItemContainerStyle(isOdd, isLast)} onClick={() => onItemClickCallback(id)} key={id}>
        <div className={itemCheckboxContainerStyle}>
          <div className={getItemCheckboxStyle(isSelected)}/>
        </div>
        <div className={itemTextContainerStyle}>{name}</div>
      </div>
    );
  }
}