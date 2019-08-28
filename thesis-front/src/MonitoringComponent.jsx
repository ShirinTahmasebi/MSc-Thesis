import React, {Component} from 'react';
import {css} from 'glamor';

let monitoringComponentContainer = css({
  width: '100%',
  backgroundColor: '#1261A0',
  height: '40px',
});


export class MonitoringComponent extends Component {

  render() {
    return (
      <div className={monitoringComponentContainer}>
        {this.props.children}
      </div>
    );
  }

}