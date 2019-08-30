import {css} from 'glamor';

export const verticalCenter = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const addButtonIconStyle = css({
  overflow: 'hidden',
  cursor: 'default',
  font: '10em',
  marginRight: '10px',
  color: '#2FD04F',
});

export const addButtonTextStyle = css({cursor: 'default', overflow: 'hidden', whiteSpace: 'nowrap'});

export const headerContainerStyle = css(verticalCenter, {
  justifyContent: 'flex-start',
  border: '1px solid black',
  backgroundColor: 'white',
});

export const addButtonStyle = css(verticalCenter, {
  overflow: 'hidden',
  justifyContent: 'flex-end',
  height: '50px',
  backgroundColor: 'white',
  '[data-should-display-add-button=true]': {
    width: '20%',
  },
  '[data-should-display-add-button=false]': {
    width: '0%',
  },
});

export const headerStyle = css(verticalCenter, {
  justifyContent: 'flex-start',
  height: '50px',
  backgroundColor: 'white',
  '[data-should-display-add-button=true]': {
    width: '80%',
  },
  '[data-should-display-add-button=false]': {
    width: '80%',
  },
});

export const createHeaderCellStyle = (headerWeight) => {
  return css(verticalCenter, {
    flex: `${headerWeight}`,
    height: '100%',
    justifyContent: 'flex-start',
    paddingLeft: `${cellLeftPadding}`,
  });
};

export const getRowRibbonStyle = (cellWeightSum) => {
  return css({height: '100%', flex: `calc(0.0195 * ${cellWeightSum})`});
};

export const cellLeftPadding = '15px';