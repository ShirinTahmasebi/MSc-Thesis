import {css} from 'glamor';

const formHeight = '350px';

export const fullWidthStyle = css({width: '100%'});

export const attributeListSelectionPartStyle = css({
  flex: '1',
  height: `${formHeight}`,
});

export const attributeSelectThresholdStyle = css({
  flex: '1',
  height: `${formHeight}`,
  display: 'flex',
  flexDirection: 'column',
});

export const thresholdPartStyle = css(fullWidthStyle, {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
});

export const legendTextStyle = css({color: '#1261A0'});