import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './background.scss';
import { useBackgroundPosition } from '../../hooks/useBackgroundPosition';

const Background = () => {
  const { pos } = useBackgroundPosition();

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
            transform: `scale(1.1) translate3d(${pos.x}px, ${pos.y}px, 0)`,
          }}
        />
      )}
    />
  );
};

export default Background;
