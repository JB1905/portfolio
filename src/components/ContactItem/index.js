import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ContactItem.css';

export const ContactItem = props => (
  <Delay wait={props.delay}>
    <div className="contact__item">
      <FontAwesomeIcon className="contact__icon" icon={props.icon} />

      <div className="contact__content">
        <h3 className="contact__title">{props.title}:</h3>
        <a
          href={`${props.method}:${props.permalink}`}
          className="contact__link">
          {props.permalink}
        </a>
      </div>
    </div>
  </Delay>
);
