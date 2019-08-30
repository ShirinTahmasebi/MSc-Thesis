import React, {Component} from 'react';
import {css} from 'glamor';

const monitoringComponentContainerStyle = css({
  width: '100%',
  backgroundColor: '#904B52',
  height: '40px',
});


export class SearchPanelComponent extends Component {
  render() {
    return (
      <div className={monitoringComponentContainerStyle}>
        {this.props.children}
      </div>
    );
  }
}