import React from 'react';
import PropTypes from 'prop-types';
import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './project.scss';

export const Project = ({ item, language, index }) => (
  <Delay wait={(index + 1) * 190 + 280}>
    <div className="project__item">
      <img src={item.image.url} alt={item.title} className="project__image" />

      <div className="project__content">
        <section className="project__main">
          <div className="project__header">
            <h3 className="project__title">{item.title}</h3>

            <time className="project__time">{item.date}</time>
          </div>

          <p className="project__description">
            {language === 'pl' ? item.descriptionPl : item.descriptionEn}
          </p>
        </section>

        <footer className="project__footer">
          {item.technologies ? (
            <ul className="project__technologies">
              {item.technologies.map(technology => (
                <li key={technology.id}>
                  <img src={technology.image.url} alt={technology.name} />
                </li>
              ))}
            </ul>
          ) : null}

          <div className="project__links">
            {item.srcLink && (
              <a href={item.srcLink} aria-label="Source preview">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}

            {item.liveLink && (
              <a href={item.liveLink} aria-label="Live preview">
                <FontAwesomeIcon icon="eye" />
              </a>
            )}
          </div>
        </footer>
      </div>
    </div>
  </Delay>
);

Project.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};
