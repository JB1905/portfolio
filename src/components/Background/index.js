import React from 'react';

import trianglify from '../../images/trianglify.svg';

import './Background.scss';

const Background = ({ height, scale, x, y }) => (
  <div
    className="background"
    style={{
      background: `url(${trianglify})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height,
      transform: `scale(${scale}) translate3d(${x}px, ${y}px, 0)`
    }}
  />
);

export default Background;
