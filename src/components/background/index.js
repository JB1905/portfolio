import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './background.scss';

const Background = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = e => {
      setPos({
        x: -(e.clientX - window.innerWidth / 2) / 30,
        y: -(e.clientY - window.innerHeight / 2) / 30
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
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
            transform: `scale(1.1) translate3d(${pos.x}px, ${pos.y}px, 0)`
          }}
        />
      )}
    />
  );
};

export default Background;
