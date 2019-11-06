import React, {Component} from 'react';
import {
  containerStyle, getTextInputContainerStyle, getLabelContainerStyle, spaceContainerStyle,
  getDropdownInputContainerStyle,
} from "./input_style";
import Dropdown from 'react-dropdown';

export default class InputTextComponent extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      label,
      type,
      inputToTextRatio,
      labelWidth,
      onChange: textOnChanged,
      initalValue,
      dropDownProps: {onChange, options, defaultOption, placeHolder} = {},
    } = this.props;
    let inputComponent;
    if (type !== 'dropdown') {
      inputComponent = (
        <input
          className={getTextInputContainerStyle(labelWidth, inputToTextRatio)}
          onChange={event => textOnChanged(event.target.value)}
          type={type}
          defaultValue={initalValue}
        />
      );
    } else {
      inputComponent =
        <Dropdown
          className={getDropdownInputContainerStyle(labelWidth, inputToTextRatio)}
          options={options}
          onChange={onChange}
          value={defaultOption}
          placeholder={placeHolder}
        />;
    }
    return (
      <div className={containerStyle(type)}>
        <div className={getLabelContainerStyle(labelWidth, inputToTextRatio)}>{label}</div>
        <div className={spaceContainerStyle}/>
        {inputComponent}
      </div>
    );
  }
}