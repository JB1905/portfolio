import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { BackgroundQuery } from '../../../graphql-types';

import './background.scss';

const Background: React.FC = () => {
  const { image } = useStaticQuery<BackgroundQuery>(query);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPos({
        x: -(e.clientX - window.innerWidth / 2) / 30,
        y: -(e.clientY - window.innerHeight / 2) / 30,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

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
