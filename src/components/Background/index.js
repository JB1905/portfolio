import React, { useState, useEffect } from 'react';

import './Background.scss';

import trianglify from '../../images/trianglify.svg';

export default function Background({ height }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.09);

  const onDeviceMove = e => {
    let x = e.accelerationIncludingGravity.x * 5;
    let y = e.accelerationIncludingGravity.y * 5;

    let stateX, stateY;

    if (window.orientation === 90) {
      stateX = (1.0 + x) / 2;
      stateY = (1.0 - y) / 2;

      y = stateX;
      x = stateY;
    } else if (window.orientation === -90) {
      stateX = (1.0 - x) / 2;
      stateY = (1.0 + y) / 2;

      y = stateX;
      x = stateY;
    } else if (window.orientation === 0) {
      stateY = (1.0 + y) / 2;
      stateX = (1.0 + x) / 2;

      y = stateY;
      x = stateX;
    } else if (window.orientation === 180) {
      stateY = (1.0 - y) / 2;
      stateX = (1.0 - x) / 2;

      y = stateY;
      x = stateX;
    }

    setPos({ x, y });
    setScale(1.3);
  };

  const onMouseMove = e => {
    setPos({
      x: -(e.clientX - window.innerWidth / 2) / 30,
      y: -(e.clientY - window.innerHeight / 2) / 30
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('devicemotion', onDeviceMove);
  }, []);

  return (
    <figure
      className="background"
      style={{
        background: `url(${trianglify})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        transform: `scale(${scale}) translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
    />
  );
}
