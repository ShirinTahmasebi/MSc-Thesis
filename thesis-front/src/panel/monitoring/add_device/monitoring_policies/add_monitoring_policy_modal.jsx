import React, {Component} from 'react';
import {
  attributeListSelectionPartStyle,
  attributeSelectThresholdStyle,
  thresholdPartStyle,
  fullWidthStyle,
  legendTextStyle,
} from "./add_monitoring_policy_modal_style";
import InputTextComponent from "../../../../components/input/input";
import DualMultiSelectionComponent from "../../../../components/dual_multi_selection/dual_multi_selection";
import {
  buttonsContainerStyle,
  buttonStyle,
  contentContainerStyle, mainContainerStyle, modalButtonContainerEndSpaceStyle, modalButtonContainerStartSpaceStyle,
  modalHeaderStyle,
  modalMainStyle,
} from "../../../../components/modal/modal_hoc_style";

export default class AddMonitoringPolicyModalComponent extends Component {

  options = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
  ];
  defaultOption = this.options[0];

  constructor() {
    super();
    this.state = {
      minThresholdValue: '',
      maxThresholdValue: '',
      minViolationCount: '',
      maxViolationCount: '',
      minCriticalityLevel: this.defaultOption,
      maxCriticalityLevel: this.defaultOption,
    };
    this.attributesRef = React.createRef();
  }

  render() {
    const minimumThresholdComponent = this.getThresholdComponent(true);
    const maximumThresholdComponent = this.getThresholdComponent(false);

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
        <div className={modalMainStyle}>
          <div className={modalHeaderStyle}>{this.props.title}</div>
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
      </div>
    );
  }

  getThresholdComponent = (isMin) => {
    return (
      <div className={thresholdPartStyle}>
        <fieldset className={fullWidthStyle}>
          <legend className={legendTextStyle}>{isMin ? 'Minimum Threshold' : 'Maximum Threshold'}</legend>

          <InputTextComponent
            label={"Threshold Value :"}
            type={"text"}
            labelWidth={'150'}
            inputToTextRatio={1}
            onChange={(stateValue) => this.onThresholdValueChanged(isMin, stateValue)}
          />

          <InputTextComponent
            label={"Violation Count:"}
            type={"text"}
            labelWidth={'150'}
            inputToTextRatio={1}
            onChange={(stateValue) => this.onViolationCountChanged(isMin, stateValue)}
          />

          <InputTextComponent
            label={"Criticality Level:"}
            type={"dropdown"}
            labelWidth={'150'}
            inputToTextRatio={1}
            dropDownProps={{
              options: this.options,
              onChange: (stateValue) => this.onCriticalityLevelChanged(isMin, stateValue),
              defaultOption: this.defaultOption,
              placeholder: "Select an option",
            }}
          />
        </fieldset>
      </div>
    );
  };

  addPolicyAndCloseModal = () => {
    // Each entry should define attribute name, max or min, threshold value, violation count, criticality level
    (this.attributesRef.current.getFinalizedSelectedItems()).map(item => {
      this.props.addPolicyCallback(item.name, "Min", this.state.minThresholdValue, this.state.minViolationCount, this.state.minCriticalityLevel.value);
      this.props.addPolicyCallback(item.name, "Max", this.state.maxThresholdValue, this.state.maxViolationCount, this.state.maxCriticalityLevel.value);
    });
    this.props.onModalCloseClickedCallback();
  };

  onThresholdValueChanged = (isMin, thresholdValue) => {
    isMin && this.setState({minThresholdValue: thresholdValue});
    !isMin && this.setState({maxThresholdValue: thresholdValue});
  };

  onViolationCountChanged = (isMin, violationCount) => {
    isMin && this.setState({minViolationCount: violationCount});
    !isMin && this.setState({maxViolationCount: violationCount});
  };

  onCriticalityLevelChanged = (isMin, criticalityLevel) => {
    isMin && this.setState({minCriticalityLevel: criticalityLevel});
    !isMin && this.setState({maxCriticalityLevel: criticalityLevel});
  };

  getFormPrevNextButtons = () => {
    return (
      <div className={buttonsContainerStyle}>
        <div className={modalButtonContainerEndSpaceStyle}/>
        <div className={buttonStyle} onClick={this.props.onModalCloseClickedCallback}>Back</div>
        <div className={buttonStyle} onClick={this.addPolicyAndCloseModal}>Add</div>
        <div className={modalButtonContainerStartSpaceStyle}/>
      </div>);
  };
}