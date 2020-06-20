import React, { useRef, useEffect } from 'react';

import { bounceIn } from '../../../animations/bounceIn';

import './technology.scss';

interface Props {
  readonly image: string;
  readonly name: string;
  readonly index: number;
}

export const Technology: React.FC<Props> = ({ image, name, index }) => {
  const card = useRef(null);

  useEffect(() => {
    bounceIn(card.current, (index + 1) * 110 + 400);
  }, []);

  return (
    <div className="technology__item" ref={card}>
      <div>
        <img src={image} alt={name} className="technology__image" />
      </div>

      <div className="technology__content">
        <p className="technology__name">{name.replace(/,/g, '\n')}</p>
      </div>
    </div>
  );
};
