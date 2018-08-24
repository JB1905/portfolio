import React from 'react';

import './Background.css';

export const Background = props => (
  <div
    className="background"
    style={{
      height: props.height,
      transform: `scale(${props.scale}) translate3d(${props.x}px, ${
        props.y
      }px, 0)`
    }}
  />
);
