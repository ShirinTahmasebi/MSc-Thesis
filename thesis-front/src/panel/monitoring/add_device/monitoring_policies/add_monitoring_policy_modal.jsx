import React, {Component} from 'react';
import {
  attributeListSelectionPartStyle,
  attributeSelectThresholdStyle,
  mainContainerStyle,
  thresholdPartStyle,
  fullWidthStyle,
  legendTextStyle, contentContainerStyle,
} from "./add_monitoring_policy_modal_style";
import InputTextComponent from "../../../../components/input/input";
import DualMultiSelectionComponent from "../../../../components/dual_multi_selection/dual_multi_selection";
import {
  buttonContainerEndSpaceStyle, buttonContainerStartSpaceStyle, buttonsContainerStyle,
  buttonStyle,
} from "../../../../components/form/multistep/form_multistep_style";

export default class AddMonitoringPolicyModalComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.attributesRef = React.createRef();
  }

  render() {
    const minimumThresholdComponent = this.getThresholdComponent('Minimum Threshold');
    const maximumThresholdComponent = this.getThresholdComponent('Maximum Threshold');

    // TODO: Fetch Attributes (In ComponentDidMount)
    const items = [
      {key: '1', name: 'Attribute 1'},
      {key: '2', name: 'Attribute 2'},
      {key: '3', name: 'Attribute 3'},
      {key: '4', name: 'Attribute 4'},
      {key: '5', name: 'Attribute 5'},
      {key: '6', name: 'Attribute 6'},
      {key: '7', name: 'Attribute 7'},
      {key: '8', name: 'Attribute 8'},
      {key: '9', name: 'Attribute 9'},
      {key: '10', name: 'Attribute 10'},
      {key: '11', name: 'Attribute 11'},
      {key: '12', name: 'Attribute 12'},
      {key: '13', name: 'Attribute 13'},
      {key: '14', name: 'Attribute 14'},
      {key: '15', name: 'Attribute 15'},
      {key: '16', name: 'Attribute 16'},
      {key: '17', name: 'Attribute 17'},
      {key: '18', name: 'Attribute 18'},
      {key: '19', name: 'Attribute 19'},
      {key: '20', name: 'Attribute 20'},
    ];

    return (
      <div className={mainContainerStyle}>
        <div className={contentContainerStyle}>
          <div className={attributeListSelectionPartStyle}>
            <DualMultiSelectionComponent items={items} ref={this.attributesRef}/>
          </div>
          <div className={attributeSelectThresholdStyle}>
            {minimumThresholdComponent}
            {maximumThresholdComponent}
          </div>
        </div>
        {this.getFormPrevNextButtons()}
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

  getFormPrevNextButtons = () => {
    return (
      <div className={buttonsContainerStyle}>
        <div className={buttonContainerEndSpaceStyle}/>
        <div className={buttonStyle} onClick={this.closeModal}>Back</div>
        <div className={buttonStyle} onClick={this.addPolicyAndCloseModal}>Add</div>
        <div className={buttonContainerStartSpaceStyle}/>
      </div>);
  };

  closeModal = () => {
    // TODO: Close Modal
  };

  addPolicyAndCloseModal = () => {
    // TODO: Get Attributes + Thresholds and Submit Them
    console.log((this.attributesRef.current.getFinalizedSelectedItems()));
  };
}