import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GraphImg from 'graphcms-image';

import { fadeIn } from '../../../animations/fadeIn';

import { Language } from '../../../enums/Language';

import './project.scss';

interface Props {
  readonly item: any;
  readonly language: Language;
  readonly index: number;
}

export const Project: React.FC<Props> = ({ item, language, index }) => {
  const card = useRef(null);

  useEffect(() => {
    fadeIn(card.current, (index + 1) * 190 + 280);
  }, []);

  return (
    <div className="project__item" ref={card}>
      <GraphImg
        image={item.image}
        alt={item.title}
        className="project__image"
      />

      <div className="project__content">
        <section className="project__main">
          <div className="project__header">
            <h3 className="project__title">{item.title}</h3>

            <time className="project__time">{item.date}</time>
          </div>

          <p className="project__description">
            {language === Language.Polish
              ? item.descriptionPl
              : item.descriptionEn}
          </p>
        </section>

        <footer className="project__footer">
          {item.technologies && (
            <ul className="project__technologies">
              {item.technologies.map((technology) => (
                <li key={technology.id}>
                  <img src={technology.image.url} alt={technology.name} />
                </li>
              ))}
            </ul>
          )}

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
  );
};
