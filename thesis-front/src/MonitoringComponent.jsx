import React, {Component} from 'react';
import {css} from 'glamor';

const monitoringComponentContainerStyle = css({
  width: '100%',
  backgroundColor: '#1261A0',
  height: '40px',
});


export class MonitoringComponent extends Component {

  render() {
    return (
      <div className={monitoringComponentContainerStyle}>
        {this.props.children}
      </div>
    );
  }

}