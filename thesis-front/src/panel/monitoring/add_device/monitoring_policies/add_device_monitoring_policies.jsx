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

  constructor() {
    super();
    this.state = {
      currentView: VIEWS.MAIN,
    };
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
        body={[
          ["Attribute 1", "Min", "10", "5", "1"],
          ["Attribute 1", "Max", "10", "5", "1"],
          ["Attribute 2", "Min", "10", "5", "2"],
          ["Attribute 2", "Max", "10", "5", "2"],
        ]}
        shouldDisplayAddButton={true}
        isEditable={true}
        isDeletable={true}
        isViewable={true}
        addButtonCallback={() => this.setState({currentView: VIEWS.ADD_POLICY})}
        addButtonText={'Add Policy'}
        editCallback={(rowData) => alert(rowData)}
        deleteCallback={(rowData) => alert(rowData)}
        viewCallback={(rowData) => alert(rowData)}
      />
      {this.props.children}
    </div>);
  };

  getAddDeviceMonitoringPoliciesAdd = () => {
    return <AddMonitoringPolicyModalComponent/>;
  };
}