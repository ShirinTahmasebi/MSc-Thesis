import {css} from 'glamor';

export const verticalCenter = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const rowButtonContainersStyle = css(verticalCenter, {
  overflow: 'hidden',
  justifyContent: 'center',
  height: '50px',
  backgroundColor: 'white',
  '[data-should-be-full-width=true]': {
    width: '20%',
  },
  '[data-should-be-full-width=false]': {
    width: '0%',
  },
});

export const headerButtonStyle = css(verticalCenter, {
  justifyContent: 'flex-start',
  padding: '8px',
  margin: '10px',
  marginRight: '12px',
  border: '1px solid black',
});

export const headerButtonIconStyle = css({
  overflow: 'hidden',
  cursor: 'default',
  font: '10em',
  marginRight: '10px',
  color: '#2FD04F',
});

export const headerButtonTextStyle = css({cursor: 'default', overflow: 'hidden', whiteSpace: 'nowrap'});

export const headerContainerStyle = css(verticalCenter, {
  justifyContent: 'flex-start',
  border: '1px solid black',
  backgroundColor: 'white',
});

export const dataColumnsStyle = css(verticalCenter, {
  justifyContent: 'flex-start',
  height: '50px',
  backgroundColor: 'white',
  '[data-should-be-full-width=true]': {
    width: '80%',
  },
  '[data-should-be-full-width=false]': {
    width: '100%',
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