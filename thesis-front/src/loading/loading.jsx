import React, {Component} from 'react';
import {css, keyframes} from 'glamor';

const containerStyle = css({
  position: 'fixed',
  margin: 0,
  padding: 0,
  background: 'transparent',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const rotationAnimation = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '50%': {transform: 'rotate(-180deg)'},
  '100%': {transform: 'rotate(0deg)'},
});


const boxStyle = css({
  width: '180px',
  height: '180px',
  borderRight: '4px solid',
  borderLeft: '4px solid',
  borderBottom: '4px solid transparent !important',
  borderTop: '4px solid transparent !important',
  borderRadius: '50%',
  position: 'absolute',
  animation: `${rotationAnimation} 2s infinite`,
});

const b1Style = css(boxStyle, {
  width: '130px',
  height: '130px',
  borderColor: '#AB4B52',
});

const b2Style = css(boxStyle, {
  width: '110px',
  height: '110px',
  borderColor: '#1261A0',
  animationDelay: '100ms',
});

const b3Style = css(boxStyle, {
  width: '90px',
  height: '90px',
  borderColor: '#904B52',
  animationDelay: '200ms',
});

const b4Style = css(boxStyle, {
  display: 'none',
  width: '100px',
  height: '100px',
  borderColor: '#3895D3',
  animationDelay: '300ms',
});

export class LoadingComponent extends Component {
  render() {
    return (
      <div className={containerStyle}>
        <div className={b1Style}/>
        <div className={b2Style}/>
        <div className={b3Style}/>
        <div className={b4Style}/>
      </div>
    );
  }
}