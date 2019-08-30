import React, {Component} from 'react';
import {css} from 'glamor';
import TableComponent from "../../components/table/table";

const monitoringComponentContainerStyle = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export class MonitoringPanelComponent extends Component {

  render() {
    return (
      <div className={monitoringComponentContainerStyle}>
        <TableComponent
          shouldDisplayAddButton={true}
          isEditable={false}
          isDeletable={false}
          isViewable={false}
          addButtonCallback={() => alert("HERE")}
          addButtonText={'Add Device'}
        />
        {this.props.children}
      </div>
    );
  }

}