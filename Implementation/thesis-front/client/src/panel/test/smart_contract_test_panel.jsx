import React, {Component} from 'react';
import {getWeb3, getContractInstance} from "../../utils/getWeb3";
import SimpleStorageContract from "../../contracts/SimpleStorage.json";
import DeviceDefaultAttributesContract from "../../contracts/DeviceDefaultAttributes.json";
import DeviceProfilesContract from "../../contracts/DeviceProfiles.json";

export class SmartContractTestPanelComponent extends Component {
  state = {
    web3: null,
    accounts: null,
    simpleStorageContract: null,
    deviceProfilesContract: null,
    deviceDefaultAttributesContract: null,
    contractTestValueSimpleStorage: 0,
    contractTestValueDeviceProfile: 0,
    contractTestValueDeviceDefaultAttributes: 0,
    shouldUseMetaMaskProvider: false,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3(this.state.shouldUseMetaMaskProvider);

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);

      // Get the contract instance.
      const simpleStorageContractInstance = await getContractInstance(web3, SimpleStorageContract);
      const deviceProfilesContractInstance = await getContractInstance(web3, DeviceProfilesContract);
      const deviceDefaultAttributesContractInstance = await getContractInstance(web3, DeviceDefaultAttributesContract);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({
          web3,
          accounts,
          simpleStorageContract: simpleStorageContractInstance,
          deviceProfilesContract: deviceProfilesContractInstance,
          deviceDefaultAttributesContract: deviceDefaultAttributesContractInstance,
        },
        this.runExample,
      );
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const {
      accounts,
      simpleStorageContract,
      deviceProfilesContract,
      deviceDefaultAttributesContract,
    } = this.state;

    // Stores a given value, 5 by default.
    await simpleStorageContract.methods.set(5).send({from: accounts[0]});

    // Get some test values from these contracts to prove it worked.
    const simpleStorageResponse = await simpleStorageContract.methods.get().call();
    const deviceDefaultAttributeResponse = await deviceDefaultAttributesContract.methods.getAllAttributeCount().call();

    await deviceProfilesContract.methods.addAttributeToDeviceById(1, "Attribute Name", 100, 2, 0, 200, 2, 0).send({from: accounts[0]});
    let deviceProfileResponse = await deviceProfilesContract.methods.getDeviceAttributes(1).call();
    deviceProfileResponse = deviceProfileResponse.length;

    // Update state with the results.
    this.setState({
      contractTestValueSimpleStorage: simpleStorageResponse,
      contractTestValueDeviceProfile: deviceProfileResponse,
      contractTestValueDeviceDefaultAttributes: deviceDefaultAttributeResponse,
    });
  };

  render() {
    return (
      <div>
        {this.getWeb3Component()}
      </div>
    );
  }

  getWeb3Component = () => {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <div>Test Simple Storage Contract: {this.state.contractTestValueSimpleStorage}</div>
        <div>Test Device Profile Contract: {this.state.contractTestValueDeviceProfile}</div>
        <div>Test Device Default Attribute Contract: {this.state.contractTestValueDeviceDefaultAttributes}</div>
      </div>
    );
  };

}