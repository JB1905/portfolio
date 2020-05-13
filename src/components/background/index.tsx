import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { useBackgroundPosition } from '../../hooks/useBackgroundPosition';

import { BackgroundQuery } from '../../../graphql-types';

import './background.scss';

const Background: React.FC = () => {
  const { pos } = useBackgroundPosition();

  const { image } = useStaticQuery<BackgroundQuery>(query);

  return (
    <figure
      className="background"
      style={{
        backgroundImage: `url(${image.publicURL})`,
        transform: `scale(1.1) translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    />
  );
};

export const query = graphql`
  query Background {
    image: file(relativePath: { eq: "trianglify.svg" }) {
      publicURL
    }
  }
`;

export default Background;
