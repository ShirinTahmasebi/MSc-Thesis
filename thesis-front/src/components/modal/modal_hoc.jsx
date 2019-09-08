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
    render() {
      const getFormPrevNextButtons = () => {
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
      return (
        <div className={mainContainerStyle}>
          <div className={modalMainStyle}>
            <div className={modalHeaderStyle}>{this.props.title}</div>
            <div className={contentContainerStyle}>
              <WrappedComponent {...this.props}/>
            </div>
            {getFormPrevNextButtons()}
          </div>
        </div>
      );
    }
  };
}