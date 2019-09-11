import React, {Component} from 'react';
import {css} from 'glamor';
import TableComponent from "../../components/table/table";
import FormMultiStepMasterComponent from "../../components/form/multistep/form_multistep_master";
import AddDeviceInfoFormComponent from "./add_device/info/add_device_info_form";
import AddDeviceAccessPoliciesFormComponent from "./add_device/access_policies/add_device_access_policies";
import AddDeviceMonitoringPoliciesFormComponent from "./add_device/monitoring_policies/add_device_monitoring_policies";

const monitoringComponentContainerStyle = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const VIEWS = {
  MAIN: 1,
  ADD_DEVICE: 2,
  OTHER: 3,
};

export class MonitoringPanelComponent extends Component {

  constructor() {
    super();
    this.state = {
      currentView: VIEWS.MAIN,
    };
  }

  render() {
    if (this.state.currentView === VIEWS.MAIN) {
      return this.getMonitoringPanelMain();
    } else if (this.state.currentView === VIEWS.ADD_DEVICE) {
      return this.getAddDeviceForm();
    } else {
      return null;
    }
  }

  getMonitoringPanelMain = () =>
    <div className={monitoringComponentContainerStyle}>
      <TableComponent
        shouldQueryForData={false}
        url={""}
        headers={[
          // Header Text + Weight
          ["Name", 2],
          ["Device Id", 6],
          ["Username", 2],
        ]}
        body={[
          ["Device 1", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User1"],
          ["Device 2", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User2"],
          ["Device 3", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User3"],
          ["Device 4", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User4"],
        ]}
        shouldDisplayAddButton={true}
        isEditable={true}
        isDeletable={true}
        isViewable={true}
        addButtonCallback={() => this.setState({currentView: VIEWS.ADD_DEVICE})}
        addButtonText={'Add Device'}
        editCallback={(rowData) => alert(rowData)}
        deleteCallback={(rowData) => alert(rowData)}
        viewCallback={(rowData) => alert(rowData)}
      />
      {this.props.children}
    </div>;

  getAddDeviceForm = () => {
    const formDataMap = new Map([
        ["addDeviceInfoStep", {
          "initialValues": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "actions": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "component": AddDeviceInfoFormComponent,
          "stepName": "Device Info",
        }],
        ["accessPoliciesStep", {
          "initialValues": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "actions": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "component": AddDeviceAccessPoliciesFormComponent,
          "stepName": "Access Policies",
        }],
        ["monitoringPoliciesStep", {
          "initialValues": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "actions": {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3",
          },
          "component": AddDeviceMonitoringPoliciesFormComponent,
          "stepName": "Monitoring Policies",
        }],
      ],
    );
    return (
      <FormMultiStepMasterComponent
        formDataMap={formDataMap}
      />
    );
  };
}