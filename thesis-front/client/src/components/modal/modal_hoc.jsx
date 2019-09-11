import React, {Component} from 'react';
import {
  buttonsContainerStyle,
  buttonStyle,
  contentContainerStyle,
  mainContainerStyle,
  modalButtonContainerEndSpaceStyle,
  modalButtonContainerStartSpaceStyle,
  modalHeaderStyle,
  modalMainStyle,
} from "./modal_hoc_style";

export function ComponentWithModal(WrappedComponent) {
  return class extends Component {
    getFormPrevNextButtons = () => {
      return (
        <div className={buttonsContainerStyle}>
          <div className={modalButtonContainerEndSpaceStyle}/>
          <div className={buttonStyle}
               onClick={this.props.onRightButtonClickCallback}>{this.props.rightButtonText}</div>
          <div className={buttonStyle}
               onClick={this.props.onLeftButtonClickCallback}>{this.props.leftButtonText}</div>
          <div className={modalButtonContainerStartSpaceStyle}/>
        </div>);
    };

    render() {
      const {onRightButtonClickCallback, onLeftButtonClickCallback, rightButtonText, leftButtonText, title, ...rest} = this.props;
      return (
        <div className={mainContainerStyle}>
          <div className={modalMainStyle}>
            <div className={modalHeaderStyle}>{title}</div>
            <div className={contentContainerStyle}>
              <WrappedComponent {...rest}/>
            </div>
            {this.getFormPrevNextButtons()}
          </div>
        </div>
      );
    }
  };
}