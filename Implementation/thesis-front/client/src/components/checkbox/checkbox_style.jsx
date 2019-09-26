import {css} from 'glamor';
import {rowVerticallyCentered} from "../table/table_style";

export const containerStyle = css(rowVerticallyCentered, {
  width: '100%',
  height: '100%',
});

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