import React, {Component} from 'react';
import TableRowComponent from './table_row';
import {
  headerButtonIconStyle,
  getRowButtonContainersStyle,
  headerButtonStyle,
  headerButtonTextStyle,
  createHeaderCellStyle,
  headerContainerStyle,
  getDataColumnsStyle,
  getRowRibbonStyle,
} from "./table_style";
import {css} from "glamor";

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
    const {isEditable, isDeletable, isViewable, editCallback, deleteCallback, viewCallback, isRowSmall = false} = this.props;

    const cellWeights = headers.map(header => header[1]);

    const tableRows = (body && body.map((value, index) => {
      return <TableRowComponent
        cellWeights={cellWeights}
        cellData={value}
        rowIndex={index}
        key={value + index}
        isEditable={isEditable}
        isDeletable={isDeletable}
        isViewable={isViewable}
        editCallback={editCallback}
        deleteCallback={deleteCallback}
        viewCallback={viewCallback}
        isRowSmall={isRowSmall}
      />;
    }));

    if (tableRows.length === 0) {
      return <TableRowComponent
        cellWeights={[1]}
        cellData={["No Data to View!"]}
        rowIndex={0}
        key={"Empty Table Body"}
        isEditable={false}
        isDeletable={false}
        isViewable={false}
        isRowSmall={isRowSmall}
      />;
    }

    return tableRows;
  };

  componentDidMount() {
    let headers;
    let body;
    if (this.props.shouldQueryForData) {
      // TODO: Query and fill headers and body
      headers = [];
      body = [];
    } else {
      headers = this.props.headers;
      body = this.props.body;
    }

    this.setState({data: {headers, body}});
  }

  render() {
    const {shouldDisplayAddButton, isSelectable, isDeletable, isViewable, shouldDisplayHeader = true, isRowSmall = false} = this.props;
    const headerCells = this.getHeaderExceptAddButton();
    const addButton = this.getAddButton();
    const bodyRows = this.getBodyRows();
    const shouldBeFullWidth = shouldDisplayAddButton || isSelectable || isDeletable || isViewable;

    const style = css({width: '80%'}, this.props.style);

    if (shouldDisplayHeader) {
      return (
        <div className={style}>
          <div className={headerContainerStyle}>
            {/* 80% of total width */}
            <div className={getDataColumnsStyle(isRowSmall)}
                 data-should-be-full-width={shouldBeFullWidth}>{headerCells}</div>
            {/* 20% of total width */}
            <div className={getRowButtonContainersStyle(isRowSmall)}
                 data-should-be-full-width={shouldBeFullWidth}>{addButton}</div>
          </div>
          <div>{bodyRows}</div>
        </div>
      );
    } else {
      return (
        <div className={style}>
          <div>{bodyRows}</div>
        </div>
      );
    }
  }
}