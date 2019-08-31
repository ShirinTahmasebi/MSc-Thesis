import React, {Component} from 'react';
import {createHeaderCellStyle, dataColumnsStyle, rowButtonContainersStyle} from "./table_style";
import {getRowMarginalRibbon, tableRowButtonStyle, tableRowContainerStyle} from "./table_row_style";

export default class TableRowComponent extends Component {

  render() {
    const {cellWeights, cellData, rowIndex, shouldDisplayAddButton, isEditable, isDeletable, isViewable} = this.props;
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
      <div className={tableRowButtonStyle} key={'View Button'}>
        <i className={"fa fa-eye"}/>
      </div>,
    );

    isEditable && buttons.push(
      <div className={tableRowButtonStyle} key={'Edit Button'}>
        <i className={"fa fa-pencil"}/>
      </div>,
    );

    isDeletable && buttons.push(
      <div className={tableRowButtonStyle} key={'Delete Button'}>
        <i className={"fa fa-trash"}/>
      </div>,
    );

    return (
      <div className={tableRowContainerStyle}>
        <div className={dataColumnsStyle}
             data-should-be-full-width={shouldBeFullWidth}
        >{dataCells}</div>
        <div className={rowButtonContainersStyle} data-should-be-full-width={shouldBeFullWidth}>
          {buttons}
        </div>
      </div>
    );
  }
}