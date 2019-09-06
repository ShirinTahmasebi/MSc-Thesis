import React, {Component} from 'react';
import {
  attributeListSelectionPartStyle,
  attributeSelectThresholdStyle,
  mainContainerStyle,
  thresholdPartStyle,
  fullWidthStyle,
  legendTextStyle,
} from "./add_monitoring_policy_modal_style";
import InputTextComponent from "../../../../components/input/input";

export default class AddMonitoringPolicyModalComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const minimumThresholdComponent = this.getThresholdComponent('Minimum Threshold');
    const maximumThresholdComponent = this.getThresholdComponent('Maximum Threshold');
    return (
      <div className={mainContainerStyle}>
        <div className={attributeListSelectionPartStyle}></div>
        <div className={attributeSelectThresholdStyle}>
          {minimumThresholdComponent}
          {maximumThresholdComponent}
        </div>
      </div>
    );
  }

  getThresholdComponent = (legendText) => {
    const options = [
      {value: '1', label: '1'},
      {value: '2', label: '2'},
      {value: '3', label: '3'},
    ];
    const defaultOption = options[0];

    return (
      <div className={thresholdPartStyle}>
        <fieldset className={fullWidthStyle}>
          <legend className={legendTextStyle}>{legendText}</legend>
          <InputTextComponent label={"Threshold Value :"} type={"text"} labelWidth={'150'} inputToTextRatio={1}/>
          <InputTextComponent label={"Violation Count:"} type={"text"} labelWidth={'150'} inputToTextRatio={1}/>
          <InputTextComponent
            label={"Criticality Level:"}
            type={"dropdown"}
            labelWidth={'150'}
            inputToTextRatio={1}
            dropDownProps={{
              options: options,
              onChange: (selected) => console.log(selected),
              defaultOption: defaultOption,
              placeholder: "Select an option",
            }}
          />
        </fieldset>
      </div>
    );
  };

}