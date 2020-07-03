import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { bounceIn } from '../../../animations/bounceIn';

import './technology.scss';

interface Props {
  readonly image: string;
  readonly name: string;
  readonly index: number;
}

export const Technology: React.FC<Props> = ({ image, name, index }) => {
  const tCard = useRef(null);
  const tImage = useRef(null);
  const tContent = useRef(null);
  const tName = useRef(null);

  useEffect(() => {
    bounceIn(tCard.current, (index + 1) * 110 + 400);
  }, []);

  const onMouseEnter = (e: any) => {
    gsap.to(tCard.current, {
      y: 5,
    });

    gsap.to(tImage.current, {
      opacity: 0.04,
    });

    gsap.to(tContent.current, {
      opacity: 1,
    });

    gsap.fromTo(
      tName.current,
      {
        // scale: 0.5,
        y: 40,
      },
      {
        // scale: 1,
        y: 0,
      }
    );
  };

  return (
    <div className="technology__item" onMouseOver={onMouseEnter} ref={tCard}>
      <div>
        <img
          src={image}
          alt={name}
          className="technology__image"
          ref={tImage}
        />
      </div>

      <div className="technology__content" ref={tContent}>
        <p className="technology__name" ref={tName}>
          {name.replace(/,/g, '\n')}
        </p>
      </div>
    </div>
  );
};
