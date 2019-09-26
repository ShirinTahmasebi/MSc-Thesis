import React, {Component} from 'react';
import {stepContainerStyle} from './form_multistep_style';

export default class FormMultiStepItemComponent extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div className={stepContainerStyle}>{this.props.children}</div>);
  }
}