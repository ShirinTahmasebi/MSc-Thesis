import React, {Component} from 'react';
import {
  buttonsContainerStyle,
  buttonStyle,
  buttonContainerStartSpaceStyle,
  buttonContainerEndSpaceStyle,
} from './form_multistep_style';

export default class FormMultiStepMasterComponent extends Component {

  constructor(props) {
    super(props);

    // Intentionally want to ignore props updates
    const {formDataMap} = props;

    this.state = {
      steps: [...formDataMap.keys()],
      stepsCount: [...formDataMap.keys()].length,
      currentStepNumber: 0,
    };
  }


  render() {
    const {steps, currentStepNumber} = this.state;
    let currentStepComponent = steps.map(step => {
      if (steps[currentStepNumber] === step) {
        return <div key={`Step Number ${currentStepNumber}`}>{this.displayStep(step)}</div>;
      }
      return null;
    });

    const masterFormHeader = <div>Header</div>;
    const masterFormContent = currentStepComponent;
    const masterFormFooter = this.getFormPrevNextButtons();
    return (
      <div>
        {masterFormHeader}
        {masterFormContent}
        {masterFormFooter}
      </div>
    );
  }

  displayStep = (step) => {
    const {formDataMap} = this.props;
    return formDataMap.get(step).component;
  };

  goToNextStep = () => {
    const {currentStepNumber, stepsCount} = this.state;
    if (currentStepNumber === stepsCount - 1) {
      // TODO: Submit data and exit from form
    } else {
      this.setState({currentStepNumber: currentStepNumber + 1});
    }
  };

  goToPreviousStep = () => {
    const {currentStepNumber} = this.state;
    if (currentStepNumber !== 0) {
      this.setState({currentStepNumber: currentStepNumber - 1});
    }
  };

  getFormPrevNextButtons = () => {
    const {currentStepNumber, stepsCount} = this.state;
    return (<div className={buttonsContainerStyle}>
      <div className={buttonContainerEndSpaceStyle}/>
      <div className={buttonStyle}
           onClick={this.goToNextStep}>
        {currentStepNumber === stepsCount - 1 ? "Finish" : "Next"}
      </div>
      {currentStepNumber === 0 ? null :
        <div className={buttonStyle}
             onClick={this.goToPreviousStep}>Back</div>}
      <div className={buttonContainerStartSpaceStyle}/>
    </div>);
  };
}