import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { fadeIn } from '../../../animations/fadeIn';

import './contact.scss';

interface Props {
  readonly delay: number;
  readonly icon: IconProp;
  readonly title: string;
  readonly method: string;
  readonly permalink: string;
}

export const Contact: React.FC<Props> = ({
  delay,
  icon,
  title,
  method,
  permalink,
}) => {
  const card = useRef(null);

  useEffect(() => {
    fadeIn(card.current, delay);
  }, []);

  return (
    <div className="contact__item" ref={card}>
      <FontAwesomeIcon className="contact__icon" icon={icon} />

      <div className="contact__content">
        <h3 className="contact__title">{title}:</h3>

        <a href={`${method}:${permalink}`} className="contact__link">
          {permalink}
        </a>
      </div>
    </div>
  );
};
