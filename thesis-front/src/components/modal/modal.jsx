import React, {Component} from 'react';
import {
  buttonsContainerStyle,
  buttonStyle, contentContainerStyle, mainContainerStyle, modalButtonContainerEndSpaceStyle,
  modalButtonContainerStartSpaceStyle, modalHeaderStyle,
  modalMainStyle,
} from "./modal_hoc_style";

export default class ModalComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getFormPrevNextButtons = () => {
    return (
      <div className={buttonsContainerStyle}>
        <div className={modalButtonContainerEndSpaceStyle}/>
        <div className={buttonStyle} onClick={this.props.rightButtonOnClickCallback}>{this.props.rightButtonText}</div>
        <div className={buttonStyle} onClick={this.props.leftButtonOnClickCallback}>{this.props.leftButtonText}</div>
        <div className={modalButtonContainerStartSpaceStyle}/>
      </div>);
  };

  render() {
    return (
      <div className={mainContainerStyle}>
        <div className={modalMainStyle}>
          <div className={modalHeaderStyle}>{this.props.title}</div>
          <div className={contentContainerStyle}>
            {this.props.children}
          </div>
          {this.getFormPrevNextButtons()}
        </div>
      </div>
    );
  }
}