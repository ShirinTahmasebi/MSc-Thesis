import {css} from 'glamor';
import {getRowRibbonStyle} from "./table_style";

export const tableRowContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '50px',
  border: '1px solid black',
  backgroundColor: 'white',
  width: '100%',
});

export const getRowMarginalRibbon = (cellWeightSum) => {
  return css(
    getRowRibbonStyle(cellWeightSum),
    {
      '[data-is-odd=true]': {
        backgroundColor: '#904B52',
      },
      '[data-is-odd=false]': {
        backgroundColor: '#1261A0',
      },
    });
};