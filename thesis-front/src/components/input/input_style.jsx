import {css} from 'glamor';
import {rowVerticallyCentered} from "../table/table_style";

export const containerStyle = css(rowVerticallyCentered,
  {
    margin: '5px 0',
    height: '30px',
  },
);

export const spaceContainerStyle = css({width: '5%'});

export const getLabelContainerStyle = (labelWidth) => {
  return css({
    width: `${labelWidth}`,
    fontSize: '0.9em',
    textAlign: 'end',
  });
};

export const getInputContainerStyle = (labelWidth, inputToTextRatio) => {
  const width = labelWidth * inputToTextRatio;
  return css({
    paddingLeft: '5px',
    width: `${width}px`,
    height: '70%',
    border: '1px solid black',
    ':focus': {
      backgroundColor: '#3895D311',
      outline: 'none',
    },
  });
};