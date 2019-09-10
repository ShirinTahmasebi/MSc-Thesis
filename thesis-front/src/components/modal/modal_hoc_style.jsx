import {css} from 'glamor';
import {rowVerticallyCentered} from "../table/table_style";

const modalPadding = 20;

export const buttonStyle = css(rowVerticallyCentered, {
  flex: '0.05',
  justifyContent: 'center',
  padding: '4px 8px',
  margin: '10px',
  marginRight: '3px',
  border: '1px solid black',
});

export const buttonsContainerStyle = css({display: 'flex', flexDirection: 'row-reverse'});

export const modalMainStyle = css({
  position: 'fixed',
  background: 'white',
  width: '80%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

export const modalHeaderStyle = css(rowVerticallyCentered, {
  background: '#1261A0',
  width: 'calc(100% - 20px)',
  height: '30px',
  color: '#fff',
  padding: '10px',
  fontSize: '1.15em',
});

export const mainContainerStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});

export const modalButtonContainerStartSpaceStyle = css({flex: '0.85'});

export const modalButtonContainerEndSpaceStyle = css({flex: '0.05'});

export const contentContainerStyle = css({
  width: `calc(100% - ${modalPadding * 2}px)`,
  padding: `${modalPadding}px`,
});
