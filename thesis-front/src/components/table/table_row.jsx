import React, {Component} from 'react';
import {createHeaderCellStyle, rowButtonContainersStyle} from "./table_style";
import {dataRowsStyle, getRowMarginalRibbon, tableRowButtonStyle, tableRowContainerStyle} from "./table_row_style";

export default class TableRowComponent extends Component {

  render() {
    const {cellWeights, cellData, rowIndex, shouldDisplayAddButton, isEditable, isDeletable, isViewable, editCallback, deleteCallback, viewCallback} = this.props;
    const cellWeightSum = cellWeights.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    let dataCells = [];

    dataCells.push(<div className={getRowMarginalRibbon(cellWeightSum)} data-is-odd={rowIndex % 2 === 1}
                        key={'ribbon'}/>);

    cellData.forEach((cell, cellNumber) => {
      const cellStyle = createHeaderCellStyle(cellWeights[cellNumber]);
      dataCells.push(<div className={cellStyle} key={cell + cellNumber}>{cell}</div>);
    });

    const shouldBeFullWidth = shouldDisplayAddButton || isEditable || isDeletable || isViewable;

    const buttons = [];

    isViewable && buttons.push(
      <div
        className={tableRowButtonStyle}
        key={'View Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => viewCallback(cellData)}
      >
        <i className={"fa fa-eye"}/>
      </div>,
    );

    isEditable && buttons.push(
      <div
        className={tableRowButtonStyle}
        key={'Edit Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => editCallback(cellData)}
      >
        <i className={"fa fa-pencil"}/>
      </div>,
    );

    isDeletable && buttons.push(
      <div
        className={tableRowButtonStyle}
        key={'Delete Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => deleteCallback(cellData)}
      >
        <i className={"fa fa-trash"}/>
      </div>,
    );

    return (
      <div className={tableRowContainerStyle} data-is-odd={rowIndex % 2 === 1}>
        <div className={dataRowsStyle} data-should-be-full-width={shouldBeFullWidth}>
          {dataCells}
        </div>
        <div className={rowButtonContainersStyle} data-should-be-full-width={shouldBeFullWidth}>
          {buttons}
        </div>
      </div>
    );
  }
}