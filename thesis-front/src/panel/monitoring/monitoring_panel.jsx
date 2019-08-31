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
          isEditable={true}
          isDeletable={true}
          isViewable={true}
          addButtonCallback={() => alert("HERE")}
          addButtonText={'Add Device'}
          editCallback={(rowData) => alert(rowData)}
          deleteCallback={(rowData) => alert(rowData)}
          viewCallback={(rowData) => alert(rowData)}
        />
        {this.props.children}
      </div>
    );
  }

}