import React, {Component} from 'react';
import {css} from 'glamor';
import 'font-awesome/css/font-awesome.min.css';
import {MenuItem} from "./menu_item";

const MAIN_HEADER_HEIGHT = 60;
const MAIN_HEADER_WIDTH = 60;

const menuContainerStyle = css({
  overflow: 'hidden',
  position: 'fixed',
  height: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
  width: MAIN_HEADER_WIDTH,
  backgroundColor: '#3895D3',
  top: MAIN_HEADER_HEIGHT,
  left: 0,
  transition: 'all .5s',
  '[data-should-open=true]': {
    width: '200px',
  },
});

const itemsContainerStyle = css({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  color: 'white',
});

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
    };
  }

  onMouseEnter = () => this.setState({openMenu: true});

  onMouseLeave = () => this.setState({openMenu: false});

  render() {
    return (
      <div className={menuContainerStyle} data-should-open={this.state.openMenu}
           onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <ul className={itemsContainerStyle}>
          <MenuItem itemIconClassName={"fa fa-home"} id='HomeItem' onClick={() => this.props.onItemClicked(1)}
                    onItemMouseEnter={this.onMouseEnter} onItemMouseLeave={this.onMouseLeave}>
            Home
          </MenuItem>
          <MenuItem itemIconClassName={"fa fa-search"} id='DeviceItem' onClick={() => this.props.onItemClicked(2)}>
            Device
          </MenuItem>
          <MenuItem itemIconClassName={"fa fa-user"} id='UserProfileItem' onClick={() => this.props.onItemClicked(3)}>
            User Profile
          </MenuItem>
          <MenuItem itemIconClassName={"fa fa-wrench"} id='GeneralItem' onClick={() => this.props.onItemClicked(4)}>
            General
          </MenuItem>
          <MenuItem itemIconClassName={"fa fa-gear"} id='SettingItem' onClick={() => this.props.onItemClicked(5)}>
            Setting
          </MenuItem>
        </ul>
      </div>
    );
  }
}

export default Menu;
