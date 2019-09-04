import {css} from 'glamor';
import {verticalCenter} from "../../table/table_style";


export const buttonsContainerStyle = css({display: 'flex', flexDirection: 'row-reverse'});
export const buttonContainerStartSpaceStyle = css({flex: '0.7'});
export const buttonContainerEndSpaceStyle = css({flex: '0.2'});
export const buttonStyle = css(verticalCenter, {
  flex: '0.05',
  justifyContent: 'center',
  padding: '4px 8px',
  margin: '10px',
  marginRight: '3px',
  border: '1px solid black',
});
