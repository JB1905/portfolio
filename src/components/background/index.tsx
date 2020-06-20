import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TweenMax, Linear } from 'gsap';

import { BackgroundQuery } from '../../../graphql-types';

import './background.scss';

const Background: React.FC = () => {
  const background = useRef(null);

  const { image } = useStaticQuery<BackgroundQuery>(query);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      TweenMax.to(background.current, 0.2, {
        x: -(e.clientX - window.innerWidth / 2) / 30,
        y: -(e.clientY - window.innerHeight / 2) / 30,
        ease: Linear.easeNone,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <figure
      className="background"
      style={{ backgroundImage: `url(${image.publicURL})` }}
      ref={background}
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
