import React, {Component} from 'react';
import {createHeaderCellStyle, getRowButtonContainersStyle} from "./table_style";
import {
  getDataRowsStyle,
  getRowMarginalRibbon,
  getTableRowButtonStyle,
  getTableRowContainerStyle,
} from "./table_row_style";

export default class TableRowComponent extends Component {

  render() {
    const {
      cellWeights,
      cellData,
      rowIndex,
      shouldDisplayAddButton,
      isEditable,
      isDeletable,
      isViewable,
      editCallback,
      deleteCallback,
      viewCallback,
      isRowSmall,
    } = this.props;
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
        className={getTableRowButtonStyle(isRowSmall)}
        key={'View Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => viewCallback(cellData)}
      >
        <i className={"fa fa-eye"}/>
      </div>,
    );

    isEditable && buttons.push(
      <div
        className={getTableRowButtonStyle(isRowSmall)}
        key={'Edit Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => editCallback(cellData)}
      >
        <i className={"fa fa-pencil"}/>
      </div>,
    );

    isDeletable && buttons.push(
      <div
        className={getTableRowButtonStyle(isRowSmall)}
        key={'Delete Button'}
        data-is-odd={rowIndex % 2 === 1}
        onClick={() => deleteCallback(cellData)}
      >
        <i className={"fa fa-trash"}/>
      </div>,
    );

    return (
      <div className={getTableRowContainerStyle(isRowSmall)} data-is-odd={rowIndex % 2 === 1}>
        <div className={getDataRowsStyle(isRowSmall)} data-should-be-full-width={shouldBeFullWidth}>
          {dataCells}
        </div>
        <div className={getRowButtonContainersStyle(isRowSmall)} data-should-be-full-width={shouldBeFullWidth}>
          {buttons}
        </div>
      </div>
    );
  }
}