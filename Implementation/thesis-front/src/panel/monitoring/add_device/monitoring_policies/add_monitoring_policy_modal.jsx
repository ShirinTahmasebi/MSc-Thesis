import React, {Component} from 'react';
import {
  attributeListSelectionPartStyle,
  attributeSelectThresholdStyle,
  thresholdPartStyle,
  fullWidthStyle,
  legendTextStyle,
  containerStyle, dualMultiSelectStyle,
} from "./add_monitoring_policy_modal_style";
import InputTextComponent from "../../../../components/input/input";
import DualMultiSelectionComponent from "../../../../components/dual_multi_selection/dual_multi_selection";
import ModalComponent from "../../../../components/modal/modal";
import {getWeb3, getContractInstance} from "../../../../utils/getWeb3";
import DeviceDefaultAttributesContract from "../../../../contracts/DeviceDefaultAttributes.json";

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
      items: [],
      // TODO: Get this field using redux (??)
      shouldUseMetaMaskProvider: false,
    };
    this.attributesRef = React.createRef();
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(this.state.shouldUseMetaMaskProvider);

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const deviceDefaultAttributesContractInstance = await getContractInstance(web3, DeviceDefaultAttributesContract);
      const attributes = await deviceDefaultAttributesContractInstance.methods.getDefaulltAttributeIndicesByModelName("RaspberryPi").call();
      const items = [];
      let i = 0;
      for (let attribute of attributes) {
        items.push({key: (i++) + "", name: attribute[0]});
      }

      // Set web3, accounts, and contract to the state
      this.setState({
          web3,
          accounts,
          items,
        },
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    const minimumThresholdComponent = this.getThresholdComponent(true);
    const maximumThresholdComponent = this.getThresholdComponent(false);
    const items = this.state.items;

    return (
      <ModalComponent
        title={"Add Monitoring Policy"}
        leftButtonText={"Add"}
        rightButtonText={"Back"}
        leftButtonOnClickCallback={this.addPolicyAndCloseModal}
        rightButtonOnClickCallback={this.props.onModalCloseClickedCallback}
      >
        <div className={containerStyle}>
          <div className={attributeListSelectionPartStyle}>
            <DualMultiSelectionComponent items={items} ref={this.attributesRef} style={dualMultiSelectStyle}/>
          </div>
          <div className={attributeSelectThresholdStyle}>
            {minimumThresholdComponent}
            {maximumThresholdComponent}
          </div>
        </div>
      </ModalComponent>
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
      return null;
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
}