import React, {Component} from 'react';
import {css} from 'glamor';
import 'font-awesome/css/font-awesome.min.css';
import {MenuItem} from "./menu_item";

const MAIN_HEADER_HEIGHT = 60;
const MAIN_HEADER_WIDTH = 60;

let menuContainer = css({
  overflow: 'hidden',
  position: 'fixed',
  height: `calc(100vh - ${MAIN_HEADER_HEIGHT}px)`,
  width: MAIN_HEADER_WIDTH,
  backgroundColor: '#3895D3',
  top: MAIN_HEADER_HEIGHT,
  left: 0,
  transition: 'all .5s',
  ':hover': {
    width: '200px',
  },
});

let itemsContainer = css({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  color: 'white',
});

class Menu extends Component {

  render() {
    return (
      <div className={menuContainer}>
        <ul className={itemsContainer}>
          <MenuItem itemIconClassName={"fa fa-home"} id='MonitoringItem' onClick={() => this.props.onItemClicked(1)}>
            Monitoring
          </MenuItem>
          <MenuItem itemIconClassName={"fa fa-search"} id='SearchItem' onClick={() => this.props.onItemClicked(2)}>
            Search
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
