import React from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './project.scss';

export const Project = ({ item, index }) => (
  <Delay wait={(index + 1) * 190 + 280}>
    <div className="project__item">
      <img src={item.image.url} alt={item.title} className="project__image" />

      <div className="project__content">
        <h3 className="project__title">{item.title}</h3>

        <div className="project__links">
          {item.srcLink && (
            <a href={item.srcLink}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}

          {item.liveLink && (
            <a href={item.liveLink}>
              <FontAwesomeIcon icon="eye" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Delay>
);

Project.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};
