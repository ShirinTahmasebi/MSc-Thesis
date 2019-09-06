import {css} from 'glamor';
import {rowVerticallyCentered} from "../table/table_style";

export const containerStyle = (type) => {
  let height;
  if (type === 'dropdown') {
    height = '100%';
  } else {
    height = '30px';
  }
  return css(rowVerticallyCentered,
    {
      margin: '5px 0',
      height: `${height}`,
    },
  );
};

export const spaceContainerStyle = css({width: '5%'});

export const getLabelContainerStyle = (labelWidth) => {
  return css({
    width: `${labelWidth}`,
    fontSize: '0.9em',
    textAlign: 'end',
  });
};

const getInputContainerStyle = (labelWidth, inputToTextRatio) => {
  const width = labelWidth * inputToTextRatio;
  return css({
    paddingLeft: '5px',
    width: `${width}px`,
    height: '70%',
  });
};

export const getTextInputContainerStyle = (labelWidth, inputToTextRatio) => {
  return css(getInputContainerStyle(labelWidth, inputToTextRatio),
    {
      border: '1px solid black',
      ':focus': {
        backgroundColor: '#3895D311',
        outline: 'none',
      },
    });
};

export const getDropdownInputContainerStyle = (labelWidth, inputToTextRatio) => {
  return css(getInputContainerStyle(labelWidth, inputToTextRatio), {fontSize: '0.9em'});
};