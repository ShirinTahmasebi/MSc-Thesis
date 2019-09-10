import React, {Component} from 'react';
import TableComponent from "../../../../components/table/table";
import {tableContainerStyle} from "./add_device_access_policies_style";
import AddAccessPolicyModalComponent from "./add_access_policy_modal";
import ShowIdsTableModalComponent from "./show_ids_table_modal";

const VIEWS = {
  MAIN: 1,
  ADD_POLICY: 2,
  LIST_OF_IDS: 3,
  OTHERS: 4,
};

export default class AddDeviceAccessPoliciesFormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: VIEWS.MAIN,
      showModal: false,
      targetUsersList: [],
    };

    if (!props.stepFieldValues.accessPoliciesList) {
      props.setMasterStateCallBack(props.componentKey, "accessPoliciesList", []);
    }
  }

  render() {
    if (this.state.currentView === VIEWS.MAIN) {
      return this.getAddDeviceAccessPoliciesListMain();
    } else if (this.state.currentView === VIEWS.ADD_POLICY) {
      return this.getAddDeviceAccessPoliciesAdd();
    } else if (this.state.currentView === VIEWS.LIST_OF_IDS) {
      return this.getListOfIds();
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

  getListOfIds = () => <ShowIdsTableModalComponent
    targetUsersList={this.state.targetUsersList}
    onModalCloseClickedCallback={this.closeAddDevicePolicyView}
  />;

  addPolicy = (resourceName, action, accessLevel, targetUsersList, invalidAccessLimit, sequentialAccessLimit) => {
    const policiesList = this.props.stepFieldValues.accessPoliciesList;
    targetUsersList.length === 1 && policiesList.push([resourceName, action, accessLevel, targetUsersList]);
    targetUsersList.length > 1 && policiesList.push([resourceName, action, accessLevel,
      <div onClick={() => this.setState({currentView: VIEWS.LIST_OF_IDS, showModal: true, targetUsersList})}>List of
        Ids</div>]);
    this.props.setMasterStateCallBack(this.props.componentKey, "accessPoliciesList", policiesList);
  };

  closeAddDevicePolicyView = () => {
    this.setState({currentView: VIEWS.MAIN, showModal: false});
  };
}