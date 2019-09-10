import {css} from 'glamor';
import {rowVerticallyCentered} from "../../../../components/table/table_style";

const formHeight = '350px';

export const fullWidthStyle = css({width: '100%'});

export const topSectionStyle = css(rowVerticallyCentered, fullWidthStyle);

export const bottomSectionStyle = css(rowVerticallyCentered, fullWidthStyle, {
  height: '350px',
});

export const topFirstSectionStyle = css({
  flex: 1,
  height: '100%',
  width: '100%',
});

export const topSecondSectionStyle = css(fullWidthStyle, {
  flex: 1,
  height: '100%',
});

export const bottomFirstSectionStyle = css({
  flex: 1,
  height: '100%',
});

export const bottomSecondSectionStyle = css(fullWidthStyle, {
  flex: 1,
  height: '100%',
});

export const legendTextStyle = css({color: '#1261A0'});

export const fieldSetStyle = css({height: '100%'});

export const thresholdPartStyle = css(fullWidthStyle, {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
});

export const innerContainerStyle = css({
  height: '300px',
});

export const addDeviceSectionStyle = css({display: 'flex', flexDirection: 'column'});

export const addDeviceCheckBoxStyle = css({
  width: 'calc(100% - 10px)',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  paddingLeft: '10px',
});

export const addDeviceSearchBoxStyle = css(fullWidthStyle, {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
});

export const addDeviceTableBoxStyle = css(fullWidthStyle, {
  display: 'flex',
  flexDirection: 'row',
  flex: 3,
  overflow: 'scroll',
  fontSize: '0.7em',
  padding: '2px',
});

export const inputStyle = css({
  padding: '5.6px',
  width: '100%',
  fontSize: '0.8em',
  border: '1px solid black',
  ':focus': {
    backgroundColor: '#3895D311',
    outline: 'none',
  },
});

export const spaceContainerStyle = css({flex: 1});

export const inputContainerStyle = css(rowVerticallyCentered, {flex: 3});

export const buttonContainerStyle = css(rowVerticallyCentered, {
  flex: 1,
});

export const buttonStyle = css(rowVerticallyCentered, {
  justifyContent: 'center',
  padding: '4px 8px',
  marginLeft: '3px',
  border: '1px solid black',
});
