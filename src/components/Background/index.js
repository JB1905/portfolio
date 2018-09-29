import React from 'react';

import trianglify from '../../images/trianglify.svg';

import './Background.css';

export const Background = props => (
  <div
    className="background"
    style={{
      background: `url(${trianglify})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: props.height,
      transform: `scale(${props.scale}) translate3d(${props.x}px, ${
        props.y
      }px, 0)`
    }}
  />
);
