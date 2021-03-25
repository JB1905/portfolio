import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './contact.scss';

// TODO replace types with generated types
interface Props {
  readonly delay: number;
  readonly icon: IconProp;
  readonly title: string;
  readonly method: string;
  readonly permalink: string;
}

export const Contact = ({ delay, icon, title, method, permalink }: Props) => (
  <Delay wait={delay}>
    <div className="contact__item">
      <FontAwesomeIcon icon={icon} className="contact__icon" />

      <div className="contact__content">
        <h3 className="contact__title">{title}:</h3>

        <a href={`${method}:${permalink}`} className="contact__link">
          {permalink}
        </a>
      </div>
    </div>
  </Delay>
);
