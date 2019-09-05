import React, {Component} from 'react';
import {css} from 'glamor';
import TableComponent from "../../components/table/table";
import FormMultiStepMasterComponent from "../../components/form/multistep/form_multistep_master";
import AddDeviceInfoFormComponent from "./add_device/add_device_info_form";

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
          "component": <AddDeviceInfoFormComponent/>,
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
          "component": <div style={{width: '90%', height: '500px', backgroundColor: '#0f0'}}>accessPoliciesStep</div>,
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
          "component": <div style={{width: '90%', height: '200px', backgroundColor: '#00f'}}>monitoringPoliciesStep</div>,
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