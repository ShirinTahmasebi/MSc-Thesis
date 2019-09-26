import React, {Component} from 'react';
import ModalComponent from "../../../../components/modal/modal";
import {addDeviceTableBoxStyle} from "./add_access_policy_modal_style";
import TableComponent from "../../../../components/table/table";
import {css} from "glamor";

export default class ShowIdsTableModalComponent extends Component {

  render() {
    return (
      <ModalComponent
        modalMainStyle={css({width: '30%'})}
        title={"List of Ids"}
        leftButtonText={"Done"}
        rightButtonText={"Back"}
        leftButtonOnClickCallback={this.props.onModalCloseClickedCallback}
        rightButtonOnClickCallback={this.props.onModalCloseClickedCallback}
      >
        {this.getDeviceIdsTable()}
      </ModalComponent>
    );
  }

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
          body={this.props.targetUsersList}
          shouldDisplayAddButton={false}
          isEditable={false}
          isDeletable={false}
          isViewable={false}
          isRowSmall={true}
        />
      </div>
    );
  };
};