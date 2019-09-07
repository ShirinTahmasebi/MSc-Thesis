import {css} from 'glamor';
import {rowVerticallyCentered} from "../../table/table_style";

const circleRadius = 22;
const circleBorder = 2;

export const stepContainerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const headerContainerStyle = css(rowVerticallyCentered, {
  margin: '0px 20px 40px 20px',
  textAlign: 'center',
});

export const headerTextContainerStyle = css(rowVerticallyCentered, {
  marginTop: '40px',
  textAlign: 'center',
  fontSize: '0.7em',
});

export const getTextContainerStyle = (text, width) => {
  return css(rowVerticallyCentered, {
    marginTop: `-${circleRadius}px`,
    width: `${width}px`,
    justifyContent: 'flex-end',
  });
};

export const buttonsContainerStyle = css({display: 'flex', flexDirection: 'row-reverse'});
export const buttonContainerStartSpaceStyle = css({flex: '0.7'});
export const buttonContainerEndSpaceStyle = css({flex: '0.2'});

export const buttonStyle = css(rowVerticallyCentered, {
  flex: '0.05',
  justifyContent: 'center',
  padding: '4px 8px',
  margin: '10px',
  marginRight: '3px',
  border: '1px solid black',
});

export const getHeaderCircleStyle = (isCurrentOrPassedStepNumber) => {
  let tempStyle;
  if (isCurrentOrPassedStepNumber) {
    tempStyle = css(rowVerticallyCentered, {
      backgroundColor: '#1261A0',
      color: '#fff',
      border: '2px solid #1261A0',
    });
  } else {
    tempStyle = css(rowVerticallyCentered, {
      backgroundColor: '#fff',
      color: '#3895D3',
      border: '2px solid #3895D3',
    });
  }

  return css(rowVerticallyCentered, tempStyle, {
    justifyContent: 'center',
    textAlign: 'center',
    width: `calc(${(circleRadius - circleBorder) * 2 }px)`,
    height: `calc(${(circleRadius - circleBorder) * 2}px)`,
    borderRadius: '50%',
    fontSize: '1em',
  });
};

export const getHeaderLineStyle = (numberOfCircles, isCurrentOrPassedStepNumber) => css({
  width: `calc((100% - ${numberOfCircles * circleRadius * 2}px) / ${numberOfCircles - 1})`,
  height: '2px',
  backgroundColor: isCurrentOrPassedStepNumber ? '#1261A0' : '#3895D3',
});


export const getHeaderTextLineStyle = (numberOfCircles, totalHeaderWidth) => {
  return css({
    width: `calc((100% - ${totalHeaderWidth}px) / ${numberOfCircles - 1})`,
    height: '2px',
    backgroundColor: '#fff',
  });
};