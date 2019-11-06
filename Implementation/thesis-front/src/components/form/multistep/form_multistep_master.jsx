import React, {Component} from 'react';
import {
  stepContainerStyle,
  buttonsContainerStyle,
  buttonStyle,
  buttonContainerStartSpaceStyle,
  buttonContainerEndSpaceStyle,
  headerContainerStyle,
  headerTextContainerStyle,
  getHeaderLineStyle,
  getHeaderCircleStyle,
  getTextContainerStyle,
  getHeaderTextLineStyle,
} from './form_multistep_style';

export default class FormMultiStepMasterComponent extends Component {

  constructor(props) {
    super(props);

    // Intentionally want to ignore props updates
    const {formDataMap} = props;

    const stepsStates = new Map();
    [...formDataMap.keys()].map(componentKey => stepsStates.set(componentKey, {}));

    this.state = {
      steps: [...formDataMap.keys()],
      stepsCount: [...formDataMap.keys()].length,
      currentStepNumber: 0,
      stepsStates: stepsStates,
    };
  }


  render() {
    const {steps, currentStepNumber} = this.state;
    let currentStepComponent = steps.map(step => {
      if (steps[currentStepNumber] === step) {
        return (
          <div
            className={stepContainerStyle}
            key={`Step Number ${currentStepNumber}`}>
            {this.displayStep(step)}
          </div>
        );
      }
      return null;
    });

    const masterFormHeader = this.getFormHeader();
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
    const ChildComponent = formDataMap.get(step).component;
    return (
      <ChildComponent
        componentKey={step}
        setMasterStateCallBack={this.setMasterState}
        initialValues={formDataMap.get(step).initialValues}
        stepFieldValues={this.state.stepsStates.get(step)}
        actions={formDataMap.get(step).actions}
      />);
  };

  goToNextStep = () => {
    const {currentStepNumber, stepsCount} = this.state;
    if (currentStepNumber === stepsCount - 1) {
      this.props.submitCallback(this.state.stepsStates);
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

  getFormHeader = () => {
    const {formDataMap} = this.props;
    const circlesCount = this.state.stepsCount;
    const steps = this.state.steps;
    let components = [];
    let headers = [];
    const stepNames = steps.map(steps => formDataMap.get(steps).stepName);
    for (let i = 0; i < circlesCount; i++) {
      let addLine = (i !== (circlesCount - 1));
      let headerText = formDataMap.get(steps[i]).stepName;
      const header = <div
        className={getTextContainerStyle(headerText, this.get_tex_width(headerText, "16px Arial"))}
        key={`Header Text Number ${i}`}
      >{headerText}</div>;
      headers.push(header);
      components.push(
        <div
          key={`Circle Number ${i}`}
          className={getHeaderCircleStyle(i <= this.state.currentStepNumber)}>
          {i + 1}
        </div>,
      );
      addLine && components.push(
        <div
          key={`Line Number ${i}`}
          className={getHeaderLineStyle(circlesCount, i < this.state.currentStepNumber)}
        />,
      );
      addLine && headers.push(
        <div
          key={`Line Number ${i}`}
          className={getHeaderTextLineStyle(circlesCount, this.get_tex_width(stepNames.join(""), "11.2px Arial"))}
        />,
      );
    }
    return (
      <div>
        <div className={headerTextContainerStyle}>
          {headers.map(value => value)}
        </div>
        <div className={headerContainerStyle}>
          {components.map(value => value)}
        </div>
      </div>
    );
  };

  get_tex_width = (txt, font) => {
    this.element = document.createElement('canvas');
    this.context = this.element.getContext("2d");
    this.context.font = font;
    return this.context.measureText(txt).width;
  };

  setMasterState = (componentKey, stateKey, stateValue) => {
    const stepsStatesMap = this.state.stepsStates;
    const componentStates = stepsStatesMap.get(componentKey);
    componentStates[stateKey] = stateValue;
    this.setState({stepsStates: stepsStatesMap});
  };
}