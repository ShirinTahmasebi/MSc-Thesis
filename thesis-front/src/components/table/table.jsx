import React, {Component} from 'react';
import TableRowComponent from './table_row';
import {
  headerButtonIconStyle,
  rowButtonContainersStyle,
  headerButtonStyle,
  headerButtonTextStyle,
  createHeaderCellStyle,
  headerContainerStyle,
  dataColumnsStyle,
  getRowRibbonStyle,
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
    let addButton = (<div key={'addButton'}/>);
    if (shouldDisplayAddButton) {
      addButton = (
        <div className={headerButtonStyle} key={'addButton'} onClick={addButtonCallback}>
          <div className={headerButtonIconStyle}>
            <i className={"fa fa-plus"}/>
          </div>
          <div className={headerButtonTextStyle}>{addButtonText}</div>
        </div>
      );
    }
    return addButton;
  };

  getBodyRows = () => {
    const {headers, body} = this.state.data;
    const {shouldDisplayAddButton, isEditable, isDeletable, isViewable, editCallback, deleteCallback, viewCallback} = this.props;

    const cellWeights = headers.map(header => header[1]);

    return body.map((value, index) => {
      return <TableRowComponent
        cellWeights={cellWeights}
        cellData={value}
        rowIndex={index}
        key={value + index}
        shouldDisplayAddButton={shouldDisplayAddButton}
        isEditable={isEditable}
        isDeletable={isDeletable}
        isViewable={isViewable}
        editCallback={editCallback}
        deleteCallback={deleteCallback}
        viewCallback={viewCallback}
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
      ["Device 1", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User1"],
      ["Device 2", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User2"],
      ["Device 3", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User3"],
      ["Device 4", "0a6188ec-b156-4d48-9ad3-e6564f5dd57e", "User4"],
    ];

    this.setState({data: {headers, body}});
  }

  render() {
    const {shouldDisplayAddButton, isSelectable, isDeletable, isViewable} = this.props;

    const headerCells = this.getHeaderExceptAddButton();
    const addButton = this.getAddButton();
    const bodyRows = this.getBodyRows();
    const shouldBeFullWidth = shouldDisplayAddButton || isSelectable || isDeletable || isViewable;
    return (
      <div style={{width: '80%'}}>
        <div className={headerContainerStyle}>
          {/* 80% of total width */}
          <div className={dataColumnsStyle} data-should-be-full-width={shouldBeFullWidth}>{headerCells}</div>
          {/* 20% of total width */}
          <div className={rowButtonContainersStyle} data-should-be-full-width={shouldBeFullWidth}>{addButton}</div>
        </div>
        <div>{bodyRows}</div>
      </div>
    );
  }
}