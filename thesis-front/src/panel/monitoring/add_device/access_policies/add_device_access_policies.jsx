import React, {Component} from 'react';
import TableComponent from "../../../../components/table/table";
import {tableContainerStyle} from "./add_device_access_policies_style";

export default class AddDeviceAccessPoliciesFormComponent extends Component {

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
          ["Action", 1],
          ["Access Level", 1],
          ["Target Users", 1],
        ]}
        body={[
          ["Resource 1", "Read", "Allow", "All"],
          ["Resource 2", "Read", "Deny", <div onClick={() => alert("Open Modal of Ids")}>List of Ids</div>],
          ["Resource 3", "Write", "Deny", "All"],
          ["Resource 4", "Write", "Allow", "All"],
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