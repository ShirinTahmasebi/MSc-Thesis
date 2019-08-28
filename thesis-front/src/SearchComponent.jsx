import React, {Component} from 'react';
import {css} from 'glamor';

let monitoringComponentContainer = css({
  width: '100%',
  backgroundColor: '#904B52',
  height: '40px',
});


export class SearchComponent extends Component {

  render() {
    return (
      <div className={monitoringComponentContainer}>
        {this.props.children}
      </div>
    );
  }

}