import {css} from 'glamor';

export const rowVerticallyCentered = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const columnHorizontallyCentered = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const rowButtonContainersStyle = css(rowVerticallyCentered, {
  overflow: 'hidden',
  justifyContent: 'center',
  height: '50px',
  backgroundColor: 'transparent',
  '[data-should-be-full-width=true]': {
    width: '15%',
  },
  '[data-should-be-full-width=false]': {
    width: '0%',
  },
});

export const headerButtonStyle = css(rowVerticallyCentered, {
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

export const headerContainerStyle = css(rowVerticallyCentered, {
  justifyContent: 'flex-start',
  border: '1px solid black',
  backgroundColor: 'white',
});

export const dataColumnsStyle = css(rowVerticallyCentered, {
  justifyContent: 'flex-start',
  height: '50px',
  backgroundColor: 'white',
  '[data-should-be-full-width=true]': {
    width: '85%',
  },
  '[data-should-be-full-width=false]': {
    width: '100%',
  },
});

export const createHeaderCellStyle = (headerWeight) => {
  return css(rowVerticallyCentered, {
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