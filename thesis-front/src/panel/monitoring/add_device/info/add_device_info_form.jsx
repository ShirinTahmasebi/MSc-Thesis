import React, {Component} from 'react';
import {
  totalFormContainerStyle,
  deviceTypeContainerStyle,
  deviceTypeTextStyle,
  deviceTypeDropDownContainerStyle,
  authenticationDataContainerStyle,
} from "./add_device_style";
import Dropdown from 'react-dropdown';
import './dropDownStyle.css';
import InputTextComponent from "../../../../components/input/input";

export default class AddDeviceInfoFormComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const selectDeviceType = this.getSelectDeviceType();
    const enterAuthenticationData = this.getAuthenticationData();
    return (
      <div className={totalFormContainerStyle}>
        {selectDeviceType}
        {enterAuthenticationData}
      </div>
    );
  }

  getSelectDeviceType = () => {
    const options = [
      {
        type: 'group', name: 'Supported', items: [
          {value: 'Raspberry Pi', label: 'Raspberry Pi'},
        ],
      },
      {
        type: 'group', name: '--', items: [
        ],
      },
    ];

    const defaultOption = options[0].items[0];
    return (
      <div className={deviceTypeContainerStyle}>
        <div className={deviceTypeTextStyle}>Device Type</div>
        <div className={deviceTypeDropDownContainerStyle}>
          <Dropdown
            options={options}
            onChange={(selected) => console.log(selected)}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
    );
  };

  getAuthenticationData = () => {
    return (
      <fieldset className={authenticationDataContainerStyle}>
        <legend>Authentication</legend>
        <InputTextComponent label={"Device Name:"} type={"text"} labelWidth={'100'} inputToTextRatio={2.25}/>
        <InputTextComponent label={"IP Address:"} type={"ip"} labelWidth={'100'} inputToTextRatio={2}/>
        <InputTextComponent label={"Username:"} type={"text"} labelWidth={'100'} inputToTextRatio={2}/>
        <InputTextComponent label={"Password:"} type={"password"} labelWidth={'100'} inputToTextRatio={2}/>
      </fieldset>
    );
  };
}