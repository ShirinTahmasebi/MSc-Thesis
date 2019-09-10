import React, {Component} from 'react';
import TableComponent from "../../../../components/table/table";
import {tableContainerStyle} from "./add_device_access_policies_style";
import AddAccessPolicyModalComponent from "./add_access_policy_modal";

const VIEWS = {
  MAIN: 1,
  ADD_POLICY: 2,
  OTHER: 3,
};

export default class AddDeviceAccessPoliciesFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: VIEWS.MAIN,
      showModal: false,
    };

    if (!props.stepFieldValues.accessPoliciesList) {
      props.setMasterStateCallBack(props.componentKey, "accessPoliciesList", [
        ["Resource 1", "Read", "Allow", "All"],
        ["Resource 2", "Read", "Deny", <div onClick={() => alert("Open Modal of Ids")}>List of Ids</div>],
        ["Resource 3", "Write", "Deny", "All"],
        ["Resource 4", "Write", "Allow", "All"],
      ]);
    }
  }

  render() {
    if (this.state.currentView === VIEWS.MAIN) {
      return this.getAddDeviceAccessPoliciesListMain();
    } else if (this.state.currentView === VIEWS.ADD_POLICY) {
      return this.getAddDeviceAccessPoliciesAdd();
    } else {
      return null;
    }
  }

  getAddDeviceAccessPoliciesListMain = () => {
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
        body={this.props.stepFieldValues.accessPoliciesList}
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

  getAddDeviceAccessPoliciesAdd = () => {
    return <AddAccessPolicyModalComponent
      addPolicyCallback={this.addPolicy}
      onModalCloseClickedCallback={this.closeAddDevicePolicyView}/>;
  };

  addPolicy = (resourceName, action, accessLevel, targetUsersList) => {
    const policiesList = this.props.stepFieldValues.accessPoliciesList;
    policiesList.push([resourceName, action, accessLevel, targetUsersList]);
    this.props.setMasterStateCallBack(this.props.componentKey, "accessPoliciesList", policiesList);
  };

  closeAddDevicePolicyView = () => {
    this.setState({currentView: VIEWS.MAIN, showModal: false});
  };
}