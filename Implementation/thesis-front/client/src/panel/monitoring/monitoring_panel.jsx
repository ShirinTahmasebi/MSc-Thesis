import React, {Component} from 'react';
import {css} from 'glamor';
import TableComponent from "../../components/table/table";
import FormMultiStepMasterComponent from "../../components/form/multistep/form_multistep_master";
import AddDeviceInfoFormComponent from "./add_device/info/add_device_info_form";
import AddDeviceAccessPoliciesFormComponent from "./add_device/access_policies/add_device_access_policies";
import AddDeviceMonitoringPoliciesFormComponent from "./add_device/monitoring_policies/add_device_monitoring_policies";
import {getWeb3, getContractInstance} from "../../utils/getWeb3";
import DeviceDefaultAttributesContract from "../../contracts/DeviceDefaultAttributes.json";
import DeviceProfilesContract from "../../contracts/DeviceProfiles.json";

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
      web3: null,
      accounts: null,
      deviceProfilesContract: null,
      deviceDefaultAttributesContract: null,
      // TODO: Get this field using redux (??)
      shouldUseMetaMaskProvider: false,
    };
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(this.state.shouldUseMetaMaskProvider);

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const deviceProfilesContractInstance = await getContractInstance(web3, DeviceProfilesContract);
      const deviceDefaultAttributesContractInstance = await getContractInstance(web3, DeviceDefaultAttributesContract);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
        web3,
        accounts,
        deviceProfilesContract: deviceProfilesContractInstance,
        deviceDefaultAttributesContract: deviceDefaultAttributesContractInstance,
      });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

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
        submitCallback={this.submitCallback}
      />
    );
  };

  submitCallback = async (stepsState) => {
    const {
      accounts,
      deviceProfilesContract,
    } = this.state;

    const items = stepsState.get("monitoringPoliciesStep");
    const attributeNamesSet = new Set();

    for (let item of items.policiesList) {
      attributeNamesSet.add(item[0]);
    }
    for (let item of attributeNamesSet.values()) {
      let minThreshold = 0;
      let maxThreshold = 0;
      let minViolationCount = 0;
      let maxViolationCount = 0;
      let minCritically = 0;
      let maxCritically = 0;

      const policiesForThisAttribute = items.policiesList.filter(policy => {
        return policy[0] === (item);
      });

      policiesForThisAttribute.filter(policy => policy[1] === "Min")
        .map(policy => {
          minThreshold = policy[2];
          minViolationCount = policy[3];
          minCritically = policy[4];
        });

      policiesForThisAttribute.filter(policy => policy[1] === "Max")
        .map(policy => {
          maxThreshold = policy[2];
          maxViolationCount = policy[3];
          maxCritically = policy[4];
        });

      await deviceProfilesContract.methods.addAttributeToDeviceById(
        1, item,
        minThreshold, minViolationCount, minCritically,
        maxThreshold, maxViolationCount, maxCritically,
      ).send({from: accounts[0]});
    }

    this.setState({currentView: VIEWS.MAIN});
  };
}