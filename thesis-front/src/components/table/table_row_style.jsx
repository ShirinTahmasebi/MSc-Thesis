import {css} from 'glamor';
import {getRowRibbonStyle, rowVerticallyCentered, dataColumnsStyle} from "./table_style";

const rowButtonPadding = 1.5;
const rowButtonMargin = 0;
const rowTotalHeight = 50;

export const tableRowContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: `${rowTotalHeight}px`,
  border: '1px solid black',
  backgroundColor: 'white',
  width: '100%',
  ':hover': {
    '[data-is-odd=true]': {
      backgroundColor: '#c27ba015',
    },
    '[data-is-odd=false]': {
      backgroundColor: '#597eaa15',
    },
  },
});

export const getRowMarginalRibbon = (cellWeightSum) => {
  return css(
    getRowRibbonStyle(cellWeightSum),
    {
      '[data-is-odd=true]': {
        backgroundColor: '#AB4B52DD',
      },
      '[data-is-odd=false]': {
        backgroundColor: '#3895D3DD',
      },
    });
};

export const dataRowsStyle = css(
  dataColumnsStyle, {
    backgroundColor: 'transparent',
  },
);

export const tableRowButtonStyle = css(
  rowVerticallyCentered, {
    justifyContent: 'center',
    flex: 0.23,
    height: `${rowTotalHeight - (rowButtonMargin * 2) - (rowButtonPadding * 2)}px`,
    margin: `${rowButtonMargin}px`,
    paddingTop: `${rowButtonPadding}px`,
    paddingBottom: `${rowButtonPadding}px`,
    fontSize: '1.5em',
    ':hover': {
      '[data-is-odd=true]': {
        color: '#AB4B52',
      },
      '[data-is-odd=false]': {
        color: '#3895D3',
      },
    },
  },
);