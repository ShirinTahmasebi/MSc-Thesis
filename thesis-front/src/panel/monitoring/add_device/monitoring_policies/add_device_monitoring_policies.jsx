import React, {Component} from 'react';
import TableComponent from "../../../../components/table/table";
import {tableContainerStyle} from "./add_device_monitoring_policies_style";
import AddMonitoringPolicyModalComponent from "./add_monitoring_policy_modal";

const VIEWS = {
  MAIN: 1,
  ADD_POLICY: 2,
  OTHER: 3,
};

export default class AddDeviceMonitoringPoliciesFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: VIEWS.MAIN,
      showModal: false,
    };

    if (!props.stepFieldValues.policiesList) {
      props.setMasterStateCallBack(props.componentKey, "policiesList", []);
    }
  }

  render() {
    if (this.state.currentView === VIEWS.MAIN) {
      return this.getAddDeviceMonitoringPoliciesListMain();
    } else if (this.state.currentView === VIEWS.ADD_POLICY) {
      return this.getAddDeviceMonitoringPoliciesAdd();
    } else {
      return null;
    }
  }

  getAddDeviceMonitoringPoliciesListMain = () => {
    return (<div className={tableContainerStyle}>
      <TableComponent
        shouldQueryForData={false}
        url={""}
        headers={[
          // Header Text + Weight
          ["Name", 1],
          ["Max. or Min.", 1],
          ["Threshold Value", 1],
          ["Violation Count", 1],
          ["Criticality Level", 1],
        ]}
        body={this.props.stepFieldValues.policiesList}
        shouldDisplayAddButton={true}
        isEditable={false}
        isDeletable={true}
        isViewable={false}
        addButtonCallback={() => this.setState({currentView: VIEWS.ADD_POLICY, showModal: true})}
        addButtonText={'Add Policy'}
        editCallback={(rowData) => alert(rowData)}
        deleteCallback={(rowData) => alert(rowData)}
        viewCallback={(rowData) => alert(rowData)}
      />
      {this.props.children}
    </div>);
  };

  getAddDeviceMonitoringPoliciesAdd = () => {
    return <AddMonitoringPolicyModalComponent
      addPolicyCallback={this.addPolicy}
      onModalCloseClickedCallback={this.closeAddDevicePolicyView}/>;
  };

  addPolicy = (attributeName, minOrMax, thresholdValue, violationCount, criticalityLevelValue) => {
    const policiesList = this.props.stepFieldValues.policiesList;
    policiesList.push([attributeName, minOrMax, thresholdValue, violationCount, criticalityLevelValue]);
    this.props.setMasterStateCallBack(this.props.componentKey, "policiesList", policiesList);
  };

  closeAddDevicePolicyView = () => {
    this.setState({currentView: VIEWS.MAIN, showModal: false});
  };
}