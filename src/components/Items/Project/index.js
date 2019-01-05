import React from 'react';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Project.scss';

const Project = ({ index, item }) => (
  <Delay wait={(index + 1) * 190 + 280}>
    <div className="project__item">
      <img src={item.image} alt={item.name} className="project__image" />

      <div className="project__content">
        <div className="project__about">
          <h3>{item.name}</h3>
          <p>{item.about}</p>
        </div>

        <div className="project__links">
          {item.linkSrc && (
            <a href={item.linkSrc}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}

          {item.linkLive && (
            <a href={item.linkLive}>
              <FontAwesomeIcon icon="eye" />
            </a>
          )}
        </div>
      </div>
    </div>
  </Delay>
);

export default Project;
