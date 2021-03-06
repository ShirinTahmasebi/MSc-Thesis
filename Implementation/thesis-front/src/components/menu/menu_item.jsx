import React, {Component} from 'react';
import {css} from 'glamor';


/* Icon + Text = 200px */
const menuItemStyle = css({
  display: 'flex', /* row - nowrap */
  backgroundColor: '#1261A0',
  height: '40px',
  alignItems: 'center',

  ':hover': {
    backgroundColor: '#904B52',
  },
});

/* Padding + FontSize = 60px */
const menuIconContainerStyle = css({
  display: 'flex', /* row - nowrap */
  fontSize: '1.5em', /* 1.5 / 0.0625 = 24px */
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 18px',
});

/* Padding + FontSize + Width = 140px */
const menuTextContainerStyle = css({
  display: 'flex',
  fontSize: '1em',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0 10px',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
});


export class MenuItem extends Component {

  render() {
    return (
      <li className={menuItemStyle} onClick={this.props.onClick}>
        <div className={menuIconContainerStyle}>
          <i className={this.props.itemIconClassName}/>
        </div>
        <div className={menuTextContainerStyle}>
          {this.props.children}
        </div>
      </li>
    );
  }

}