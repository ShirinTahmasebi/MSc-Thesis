import {css} from 'glamor';
import {columnHorizontallyCentered, rowVerticallyCentered} from "../table/table_style";

export const containerStyle = css(rowVerticallyCentered, {
  width: 'calc(100% - 20px)',
  height: 'calc(100% - 20px)',
  margin: '10px',
});

export const itemsListContainerStyle = css(rowVerticallyCentered, {
  flex: 1,
  height: '100%',
  border: '1px solid black',
});

export const allItemsListStyle = css({height: '100%', overflow: 'scroll', width: '100%'});

export const buttonsContainerStyle = css(columnHorizontallyCentered, {
  justifyContent: 'center',
  flex: 0.5,
  height: '100%',
});

export const getItemContainerStyle = (isOdd, isLast) => {
  const colorCode = isOdd ? '#eee' : '#fff';
  const borderSize = 1;
  const paddingLeftSize = 5;
  return css(rowVerticallyCentered, {
    backgroundColor: `${colorCode}`,
    border: `${borderSize}px solid black`,
    borderBottom: (isLast) ? `${borderSize}px solid black` : 'none',
    borderRight: 'none',
    borderLeft: 'none',
    width: `calc(100% - ${paddingLeftSize}px - ${2 * borderSize}px)`,
    height: '30px',
    paddingLeft: `${paddingLeftSize}px`,
    ':hover': {
      backgroundColor: '#3895D355',
    },
  });
};

export const itemTextContainerStyle = css({
  flex: '10',
  paddingLeft: '5px',
});

export const itemCheckboxContainerStyle = css(rowVerticallyCentered, {
    flex: '1.5',
    width: '100%',
    height: '100%',
});

export const getItemCheckboxStyle = (isSelected) => {
  const colorCode = isSelected ? '#000' : '#fff';
  return css({
    width: '12px',
    height: '12px',
    margin: '5px',
    border: '1px solid black',
    backgroundColor: `${colorCode}`,
  });
};

export const buttonsRowStyle = css(rowVerticallyCentered, {});
export const buttonStyle = css(rowVerticallyCentered, {
  border: '1.25px solid black',
  borderRadius: '5px',
  width: '25px',
  height: '25px',
  padding: '5px',
  margin: '5px',
  justifyContent: 'center',
  fontSize: '1.5em',
});