import React from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact.scss';

export const Contact = ({ delay, icon, title, method, permalink }) => (
  <Delay wait={delay}>
    <div className="contact__item">
      <FontAwesomeIcon className="contact__icon" icon={icon} />

      <div className="contact__content">
        <h3 className="contact__title">{title}:</h3>

        <a href={`${method}:${permalink}`} className="contact__link">
          {permalink}
        </a>
      </div>
    </div>
  </Delay>
);

Contact.propTypes = {
  delay: PropTypes.number,
  icon: PropTypes.string,
  title: PropTypes.string,
  method: PropTypes.string,
  permalink: PropTypes.string
};
