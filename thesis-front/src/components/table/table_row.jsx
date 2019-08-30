import React, {Component} from 'react';
import {createHeaderCellStyle, headerStyle} from "./table_style";
import {tableRowContainerStyle, getRowMarginalRibbon} from "./table_row_style";

export default class TableRowComponent extends Component {

  render() {
    const {cellWeights, cellData, rowIndex, shouldDisplayAddButton} = this.props;
    const cellWeightSum = cellWeights.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    let dataCells = [];

    dataCells.push(<div className={getRowMarginalRibbon(cellWeightSum)} data-is-odd={rowIndex % 2 === 1}
                        key={'ribbon'}/>);

    cellData.forEach((cell, cellNumber) => {
      const cellStyle = createHeaderCellStyle(cellWeights[cellNumber]);
      dataCells.push(<div className={cellStyle} key={cell + cellNumber}>{cell}</div>);
    });

    return (
      <div className={tableRowContainerStyle}>
        <div className={headerStyle} data-should-display-add-button={shouldDisplayAddButton}>{dataCells}</div>
      </div>
    );
  }
}