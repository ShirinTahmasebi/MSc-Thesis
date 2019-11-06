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

  options = [{value: 'Raspberry Pi', label: 'Raspberry Pi'}];
  defaultOption = this.options[0];

  constructor(props) {
    super(props);
    if (!props.stepFieldValues.deviceType) {
      props.setMasterStateCallBack(props.componentKey, "deviceType", this.defaultOption);
    }
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
    return (
      <div className={deviceTypeContainerStyle}>
        <div className={deviceTypeTextStyle}>Device Type</div>
        <div className={deviceTypeDropDownContainerStyle}>
          <Dropdown
            options={this.options}
            onChange={this.onDeviceTypeChanged}
            value={this.props.stepFieldValues.deviceType}
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

        <InputTextComponent
          label={"Device Name:"}
          type={"text"}
          labelWidth={'100'}
          inputToTextRatio={2.25}
          onChange={this.onDeviceNameChanged}
          initalValue={this.props.stepFieldValues.deviceName}
        />

        <InputTextComponent
          label={"IP Address:"}
          type={"ip"}
          labelWidth={'100'}
          inputToTextRatio={2}
          onChange={this.onIpAddressChanged}
          initalValue={this.props.stepFieldValues.ipAddress}
        />

        <InputTextComponent
          label={"Username:"}
          type={"text"}
          labelWidth={'100'}
          inputToTextRatio={2}
          onChange={this.onUsernameChanged}
          initalValue={this.props.stepFieldValues.username}
        />

        <InputTextComponent
          label={"Password:"}
          type={"password"}
          labelWidth={'100'}
          inputToTextRatio={2}
          onChange={this.onPasswordChanged}
          initalValue={this.props.stepFieldValues.password}
        />

      </fieldset>
    );
  };

  onDeviceTypeChanged = (selected) => {
    this.props.setMasterStateCallBack(this.props.componentKey, "deviceType", selected);
  };

  onDeviceNameChanged = (deviceName) => {
    this.props.setMasterStateCallBack(this.props.componentKey, "deviceName", deviceName);
  };

  onIpAddressChanged = (ipAddress) => {
    this.props.setMasterStateCallBack(this.props.componentKey, "ipAddress", ipAddress);
  };

  onUsernameChanged = (username) => {
    this.props.setMasterStateCallBack(this.props.componentKey, "username", username);
  };

  onPasswordChanged = (password) => {
    this.props.setMasterStateCallBack(this.props.componentKey, "password", password);
  };
}