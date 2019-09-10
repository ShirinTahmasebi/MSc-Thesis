import React, {Component} from 'react';
import {
  itemsListContainerStyle,
  allItemsListStyle,
  buttonsContainerStyle, buttonsRowStyle, buttonStyle,
  containerStyle,
} from "./dual_multi_selection_style";
import DualMultiSelectionItemComponent from "./dual_multi_selection_item";
import {css} from "glamor";

export default class DualMultiSelectionComponent extends Component {

  constructor(props) {
    super(props);

    const convertedItems = props.items.map(value => {
      return {...value, isSelected: false, isOnLeft: true};
    });

    this.state = {items: convertedItems};
  }

  render() {
    const allItemsList = this.getAllItemsList(true);
    const buttons = this.getButtons();
    const selectedItemsList = this.getAllItemsList(false);
    return (
      <div className={css(containerStyle, this.props.style)}>
        <div className={itemsListContainerStyle}>{allItemsList}</div>
        <div className={buttonsContainerStyle}>{buttons}</div>
        <div className={itemsListContainerStyle}>{selectedItemsList}</div>
      </div>
    );
  }

  getAllItemsList = (isOnLeft) => {
    const allItems = this.state.items.filter(value => value.isOnLeft === isOnLeft);
    const allItemsRows = allItems.map((value, index) => {
      return (
        <DualMultiSelectionItemComponent
          key={value.key}
          id={value.key}
          name={value.name}
          isSelected={value.isSelected}
          isOdd={index % 2 === 1}
          isLast={index === (allItems.length - 1)}
          onItemClickCallback={(id) => {
            let items = this.state.items;
            items = items.map(item => (item.key === id) ? {...item, isSelected: !item.isSelected} : item);
            this.setState({items});
          }}
        />
      );
    });
    return (<div className={allItemsListStyle}>{allItemsRows}</div>);
  };

  getButtons = () => {
    return (
      <div>
        <div className={buttonsRowStyle}>
          <div className={buttonStyle} onClick={this.onMultipleDeselectItemClicked}><i
            className={"fa fa-angle-double-left"}/></div>
          <div className={buttonStyle} onClick={this.onMultipleSelectItemClicked}><i
            className={"fa fa-angle-double-right"}/></div>
        </div>
        <div className={buttonsRowStyle}>
          <div className={buttonStyle} onClick={this.onSingleDeselectItemClicked}><i className={"fa fa-angle-left"}/>
          </div>
          <div className={buttonStyle} onClick={this.onSingleSelectItemClicked}><i className={"fa fa-angle-right"}/>
          </div>
        </div>
      </div>
    );
  };

  onMultipleDeselectItemClicked = () => {
    let items = this.state.items;
    items = items.map(i => (!i.isOnLeft) ? {...i, isSelected: false, isOnLeft: true} : i);
    this.setState({items});
  };

  onMultipleSelectItemClicked = () => {
    let items = this.state.items;
    items = items.map(i => (i.isOnLeft) ? {...i, isSelected: false, isOnLeft: false} : i);
    this.setState({items});
  };

  onSingleDeselectItemClicked = () => {
    let items = this.state.items;
    items = items.map(i => (!i.isOnLeft && i.isSelected) ? {...i, isSelected: false, isOnLeft: true} : i);
    this.setState({items});
  };

  onSingleSelectItemClicked = () => {
    let items = this.state.items;
    items = items.map(i => (i.isOnLeft && i.isSelected) ? {...i, isSelected: false, isOnLeft: false} : i);
    this.setState({items});
  };

  getFinalizedSelectedItems = () => this.state.items.filter(item => !item.isOnLeft);
}