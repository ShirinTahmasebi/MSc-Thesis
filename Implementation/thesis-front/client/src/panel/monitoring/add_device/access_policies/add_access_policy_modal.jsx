import React, {Component} from 'react';
import ModalComponent from "../../../../components/modal/modal";
import {
  topSectionStyle,
  bottomSectionStyle,
  topFirstSectionStyle,
  topSecondSectionStyle,
  legendTextStyle,
  bottomFirstSectionStyle,
  bottomSecondSectionStyle,
  innerContainerStyle,
  addDeviceSectionStyle,
  addDeviceCheckBoxStyle,
  addDeviceSearchBoxStyle,
  addDeviceTableBoxStyle, inputContainerStyle, buttonStyle, buttonContainerStyle, spaceContainerStyle, inputStyle,
} from "./add_access_policy_modal_style";
import InputTextComponent from "../../../../components/input/input";
import DualMultiSelectionComponent from "../../../../components/dual_multi_selection/dual_multi_selection";
import {css} from "glamor";
import CheckboxComponent from "../../../../components/checkbox/checkbox";
import {rowVerticallyCentered} from "../../../../components/table/table_style";
import TableComponent from "../../../../components/table/table";

export default class AddAccessPolicyModalComponent extends Component {

  actionOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
  ];
  defaultActionOption = this.actionOptions[0];

  accessLevelOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
  ];
  defaultAccessLevelOption = this.accessLevelOptions[0];

  constructor() {
    super();
    this.state = {
      action: this.defaultActionOption,
      accessLevel: this.defaultAccessLevelOption,
      targetUsersList: [],
      selectedCheckBox: 'Only',
      currentIdInput: '',
      sequentialAccessLimit: '1',
      invalidAccessLimit: '1',
    };
    this.attributesRef = React.createRef();
  }

  render() {
    const topFirstSection = this.getTopFirstSection();
    const topSecondSection = this.getTopSecondSection();
    const bottomFirstSection = this.getBottomFirstSection();
    const bottomSecondSection = this.getBottomSecondSection();

    return (
      <ModalComponent
        title={"Add Access Policy"}
        leftButtonText={"Add"}
        rightButtonText={"Back"}
        leftButtonOnClickCallback={this.addPolicyAndCloseModal}
        rightButtonOnClickCallback={this.props.onModalCloseClickedCallback}
      >
        <div className={topSectionStyle}>
          {topFirstSection}
          {topSecondSection}
        </div>
        <div className={bottomSectionStyle}>
          {bottomFirstSection}
          {bottomSecondSection}
        </div>
      </ModalComponent>
    );
  }

  getTopFirstSection = () => {
    return (
      <div className={topFirstSectionStyle}>
        <InputTextComponent
          label={"Action:"}
          type={"dropdown"}
          labelWidth={'150'}
          inputToTextRatio={1}
          dropDownProps={{
            options: this.actionOptions,
            onChange: (stateValue) => this.onActionChanged(stateValue),
            defaultOption: this.defaultActionOption,
            placeholder: "Select an option",
          }}
        />
        <InputTextComponent
          label={"Access Level:"}
          type={"dropdown"}
          labelWidth={'150'}
          inputToTextRatio={1}
          dropDownProps={{
            options: this.accessLevelOptions,
            onChange: (stateValue) => this.onAccessLevelChanged(stateValue),
            defaultOption: this.defaultAccessLevelOption,
            placeholder: "Select an option",
          }}
        />
      </div>
    );
  };

  getTopSecondSection = () => {
    return (
      <div className={topSecondSectionStyle}>
        <InputTextComponent
          label={"Sequential Access Limit:"}
          type={"number"}
          labelWidth={'200'}
          inputToTextRatio={0.2}
          onChange={(stateValue) => this.onSequentialAccessLimitChanged(stateValue)}
          initalValue={this.state.sequentialAccessLimit}
        />
        <InputTextComponent
          label={"Invalid Access Limit:"}
          type={"number"}
          labelWidth={'200'}
          inputToTextRatio={0.2}
          onChange={(stateValue) => this.onInvalidAccessLimitChanged(stateValue)}
          initalValue={this.state.invalidAccessLimit}
        />
      </div>);
  };

  addPolicyAndCloseModal = () => {
    // Each entry should define resource name, action, access level, target users
    (this.attributesRef.current.getFinalizedSelectedItems()).map(item =>
      this.props.addPolicyCallback(
        item.name,
        this.state.action.value,
        this.state.accessLevel.value,
        this.state.targetUsersList,
        this.state.invalidAccessLimit,
        this.state.sequentialAccessLimit,
      ));
    this.props.onModalCloseClickedCallback();
  };

  getBottomFirstSection = () => {
    // TODO: Fetch Resources (In ComponentDidMount)
    const items = [
      {key: '1', name: 'Resource 1'},
      {key: '2', name: 'Resource 2'},
      {key: '3', name: 'Resource 3'},
      {key: '4', name: 'Resource 4'},
      {key: '5', name: 'Resource 5'},
      {key: '6', name: 'Resource 6'},
      {key: '7', name: 'Resource 7'},
      {key: '8', name: 'Resource 8'},
      {key: '9', name: 'Resource 9'},
      {key: '10', name: 'Resource 10'},
      {key: '11', name: 'Resource 11'},
      {key: '12', name: 'Resource 12'},
      {key: '13', name: 'Resource 13'},
      {key: '14', name: 'Resource 14'},
      {key: '15', name: 'Resource 15'},
      {key: '16', name: 'Resource 16'},
      {key: '17', name: 'Resource 17'},
      {key: '18', name: 'Resource 18'},
      {key: '19', name: 'Resource 19'},
      {key: '20', name: 'Resource 20'},
    ];

    return (
      <div className={bottomFirstSectionStyle}>
        <fieldset>
          <legend className={legendTextStyle}>Select Resources</legend>
          <div className={innerContainerStyle}>
            <DualMultiSelectionComponent items={items} ref={this.attributesRef}/>
          </div>
        </fieldset>
      </div>
    );
  };

  getBottomSecondSection = () => {
    const checkBoxes = this.getCheckBoxes();
    const searchBox = this.getSearchBox();
    const deviceIdsTable = this.getDeviceIdsTable();

    return (
      <div className={bottomSecondSectionStyle}>
        <fieldset>
          <legend className={legendTextStyle}>Add Device or User Ids</legend>
          <div className={css(innerContainerStyle, addDeviceSectionStyle)}>
            {checkBoxes}
            {searchBox}
            {deviceIdsTable}
          </div>
        </fieldset>
      </div>
    );
  };

  getCheckBoxes = () => {
    return (
      <div className={addDeviceCheckBoxStyle}>
        <CheckboxComponent
          style={css(rowVerticallyCentered, {flex: 1, fontSize: '0.8em'})}
          key={'Everyone Checkbox Item'}
          id={'Everyone Checkbox Item'}
          name={'Everyone'}
          isSelected={this.state.selectedCheckBox === 'Everyone'}
          onItemClickCallback={() => this.setState({selectedCheckBox: 'Everyone'})}
        />

        <CheckboxComponent
          style={css(rowVerticallyCentered, {flex: 0.9, fontSize: '0.8em'})}
          key={'None Checkbox Item'}
          id={'None Checkbox Item'}
          name={'None'}
          isSelected={this.state.selectedCheckBox === 'None'}
          onItemClickCallback={() => this.setState({selectedCheckBox: 'None'})}
        />

        <CheckboxComponent
          style={css(rowVerticallyCentered, {flex: 1.4, fontSize: '0.8em'})}
          key={'Everyone Except Checkbox Item'}
          id={'Everyone Except Checkbox Item'}
          name={'Everyone Except'}
          isSelected={this.state.selectedCheckBox === 'Everyone Except'}
          onItemClickCallback={() => this.setState({selectedCheckBox: 'Everyone Except'})}
        />

        <CheckboxComponent
          style={css(rowVerticallyCentered, {flex: 0.8, fontSize: '0.8em'})}
          key={'Only Checkbox Item'}
          id={'Only Checkbox Item'}
          name={'Only'}
          isSelected={this.state.selectedCheckBox === 'Only'}
          onItemClickCallback={() => this.setState({selectedCheckBox: 'Only'})}
        />
      </div>
    );
  };

  getSearchBox = () => {
    return (
      <div className={addDeviceSearchBoxStyle}>
        <div className={spaceContainerStyle}/>
        <div className={inputContainerStyle}>
          <input
            className={inputStyle}
            onChange={event => this.idTextOnChanged(event.target.value)}
            type={"text"}
            value={this.state.currentIdInput}
            placeholder={"EnterId"}
          />
        </div>
        <div className={buttonContainerStyle}>
          <div className={buttonStyle} onClick={this.onAddIdButtonClicked}>Add</div>
        </div>
        <div className={spaceContainerStyle}/>
      </div>
    );
  };

  getDeviceIdsTable = () => {
    return (
      <div className={addDeviceTableBoxStyle}>
        <TableComponent
          shouldQueryForData={false}
          style={{width: '100%'}}
          headers={[
            // Header Text + Weight
            ["Id", 1],
          ]}
          shouldDisplayHeader={false}
          body={this.state.targetUsersList}
          shouldDisplayAddButton={false}
          isEditable={false}
          isDeletable={true}
          isViewable={false}
          isRowSmall={true}
          deleteCallback={(rowData) => alert(rowData)}
        />
      </div>
    );
  };

  idTextOnChanged = (currentIdInput) => {
    this.setState({currentIdInput});
  };

  onAddIdButtonClicked = () => {
    const targetUsersList = this.state.targetUsersList;
    targetUsersList.push([this.state.currentIdInput]);
    this.setState({targetUsersList, currentIdInput: ''});
  };

  onAccessLevelChanged = (accessLevel) => {
    this.setState({accessLevel});
  };

  onActionChanged = (action) => {
    this.setState({action});
  };

  onInvalidAccessLimitChanged = (invalidAccessLimit) => {
    this.setState({invalidAccessLimit});
  };

  onSequentialAccessLimitChanged = (sequentialAccessLimit) => {
    this.setState({sequentialAccessLimit});
  };
};