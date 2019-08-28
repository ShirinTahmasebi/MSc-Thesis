import React, {Component} from 'react';
import {css, keyframes} from 'glamor';

// body {
//
// }

let container = css({
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

let rotation = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '50%': {transform: 'rotate(-180deg)'},
  '100%': {transform: 'rotate(0deg)'},
});


let box = css({
  width: '180px',
  height: '180px',
  borderRight: '4px solid',
  borderLeft: '4px solid',
  borderBottom: '4px solid transparent !important',
  borderTop: '4px solid transparent !important',
  borderRadius: '50%',
  position: 'absolute',
  animation: `${rotation} 2s infinite`,
});

let b1 = css(box, {
  width: '130px',
  height: '130px',
  borderColor: '#AB4B52',
});

let b2 = css(box, {
  width: '110px',
  height: '110px',
  borderColor: '#1261A0',
  animationDelay: '100ms',
});

let b3 = css(box, {
  width: '90px',
  height: '90px',
  borderColor: '#904B52',
  animationDelay: '200ms',
});

let b4 = css(box, {
  display: 'none',
  width: '100px',
  height: '100px',
  borderColor: '#3895D3',
  animationDelay: '300ms',
});

export class LoadingComponent extends Component {
  render() {
    return (
      <div className={container}>
        <div className={b1}/>
        <div className={b2}/>
        <div className={b3}/>
        <div className={b4}/>
      </div>
    );
  }
}