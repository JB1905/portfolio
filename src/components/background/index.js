import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './background.scss';

export default () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1.09);

  useEffect(() => {
    const onDeviceMove = e => {
      const x = e.accelerationIncludingGravity.x * 5;
      const y = e.accelerationIncludingGravity.y * 5;

      setPos({ x, y });
      setScale(1.3);
    };

    const onMouseMove = e => {
      setPos({
        x: -(e.clientX - window.innerWidth / 2) / 30,
        y: -(e.clientY - window.innerHeight / 2) / 30
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('devicemotion', onDeviceMove);
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "trianglify.svg" }) {
            publicURL
          }
        }
      `}
      render={({ image }) => (
        <figure
          className="background"
          style={{
            backgroundImage: `url(${image.publicURL})`,
            transform: `scale(${scale}) translate3d(${pos.x}px, ${pos.y}px, 0)`
          }}
        />
      )}
    />
  );
};
