import React, {Component} from 'react';
import TableComponent from "../../../../components/table/table";
import {tableContainerStyle} from "./add_device_monitoring_policies_style";

export default class AddDeviceMonitoringPoliciesFormComponent extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
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
        addButtonCallback={() => alert("Add Policy")}
        addButtonText={'Add Policy'}
        editCallback={(rowData) => alert(rowData)}
        deleteCallback={(rowData) => alert(rowData)}
        viewCallback={(rowData) => alert(rowData)}
      />
      {this.props.children}
    </div>);
  }
}