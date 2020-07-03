import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GraphImg from 'graphcms-image';
import gsap from 'gsap';

import { fadeIn } from '../../../animations/fadeIn';

import { Language } from '../../../enums/Language';

import './project.scss';

interface Props {
  readonly item: any;
  readonly language: Language;
  readonly index: number;
}

export const Project: React.FC<Props> = ({ item, language, index }) => {
  const pCard = useRef(null);
  // const pImage = useRef(null);
  const pContent = useRef(null);
  const pMain = useRef(null);
  const pHeader = useRef(null);
  const pTime = useRef(null);
  const pDescription = useRef(null);
  const pFooter = useRef(null);
  const pTechnologies = useRef(null);
  const pTechnologyItem = useRef(null);
  const pLinks = useRef(null);

  useEffect(() => {
    fadeIn(pCard.current, (index + 1) * 190 + 280);
  }, []);

  const onMouseOver = () => {
    gsap.to(pCard.current, {
      y: 5,
    });

    // gsap.to(pImage.current, {
    //   opacity: 0.04,
    // });

    gsap.to(pContent.current, {
      autoAlpha: 1,
    });
  };

  return (
    <div className="project__item" onMouseOver={onMouseOver} ref={pCard}>
      <GraphImg
        image={item.image}
        alt={item.title}
        className="project__image"
      />

      <div className="project__content" ref={pContent}>
        <section className="project__main" ref={pMain}>
          <div className="project__header" ref={pHeader}>
            <h3 className="project__title">{item.title}</h3>

            <time className="project__time" ref={pTime}>
              {item.date}
            </time>
          </div>

          <p className="project__description" ref={pDescription}>
            {language === Language.Polish
              ? item.descriptionPl
              : item.descriptionEn}
          </p>
        </section>

        <footer className="project__footer" ref={pFooter}>
          {item.technologies && (
            <ul className="project__technologies" ref={pTechnologies}>
              {item.technologies.map((technology) => (
                <li key={technology.id} ref={pTechnologyItem}>
                  <img src={technology.image.url} alt={technology.name} />
                </li>
              ))}
            </ul>
          )}

          <div className="project__links" ref={pLinks}>
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
