import React, {Component} from 'react';
import {css} from 'glamor';
import TableRowComponent from './table_row';
import {
  addButtonIconStyle,
  addButtonStyle,
  addButtonTextStyle,
  createHeaderCellStyle,
  headerContainerStyle,
  headerStyle,
  getRowRibbonStyle,
  verticalCenter,
} from "./table_style";

export default class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      selectedRows: [],
      data: {
        headers: [],
        body: [],
      },
    };
  }

  addButtonStyle = () => css(verticalCenter, {
    justifyContent: 'flex-start',
    padding: '8px',
    margin: '10px',
    marginRight: '12px',
    border: '1px solid black',
  });

  getHeaderExceptAddButton = () => {
    const {headers} = this.state.data;
    const cellWeightSum = headers.reduce((previousSum, currentHeader) => previousSum + currentHeader[1], 0);
    let headerCells = [];
    headerCells.push(<div className={getRowRibbonStyle(cellWeightSum)} key={'ribbon'}/>);
    headerCells.push(
      headers.map((header) => {
        const headerCellStyle = createHeaderCellStyle(header[1]);
        return (<div className={headerCellStyle} key={header[0] + header[1]}>{header[0]}</div>);
      }),
    );
    return headerCells;
  };

  getAddButton = () => {
    const {shouldDisplayAddButton, addButtonCallback, addButtonText} = this.props;
    const addButtonContainerStyle = this.addButtonStyle();
    let addButton = (<div className={addButtonContainerStyle} key={'addButton'}/>);
    if (shouldDisplayAddButton) {
      addButton = (
        <div className={addButtonContainerStyle} key={'addButton'} onClick={addButtonCallback}>
          <div className={addButtonIconStyle}>
            <i className={"fa fa-plus"}/>
          </div>
          <div className={addButtonTextStyle}>{addButtonText}</div>
        </div>
      );
    }
    return addButton;
  };

  getBodyRows = () => {
    const {headers, body} = this.state.data;

    const cellWeights = headers.map(header => header[1]);

    return body.map((value, index) => {
      return <TableRowComponent
        cellWeights={cellWeights}
        cellData={value}
        rowIndex={index}
        key={value + index}
        shouldDisplayAddButton
      />;
    });
  };

  componentDidMount() {
    const headers = [
      // Header Text + Weight
      ["Name", 2],
      ["Device Id", 6],
      ["Username", 2],
    ];

    const body = [
      ["Device 1", "DeviceId1", "User1"],
      ["Device 2", "DeviceId2", "User2"],
      ["Device 3", "DeviceId3", "User3"],
      ["Device 4", "DeviceId4", "User4"],
    ];

    this.setState({data: {headers, body}});
  }

  render() {
    const {shouldDisplayAddButton} = this.props;

    const headerCells = this.getHeaderExceptAddButton();
    const addButton = this.getAddButton();
    const bodyRows = this.getBodyRows();

    return (
      <div style={{width: '80%'}}>
        <div className={headerContainerStyle}>
          {/* 80% of total width */}
          <div className={headerStyle} data-should-display-add-button={shouldDisplayAddButton}>{headerCells}</div>
          {/* 20% of total width */}
          <div className={addButtonStyle} data-should-display-add-button={shouldDisplayAddButton}>{addButton}</div>
        </div>
        <div>{bodyRows}</div>
      </div>
    );
  }
}