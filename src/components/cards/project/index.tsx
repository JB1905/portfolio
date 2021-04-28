import Delay from 'react-delay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import GraphImg from '@graphcms/react-image';

import { Language } from '../../../enums/Language';

import { ProjectsQuery } from '../../../../graphql-types';

import './project.scss';

// TODO replace types with generated types
interface Props {
  readonly item: ProjectsQuery['graphCmsData']['projects'][number];
  readonly language: Language;
  readonly index: number;
}

export const Project = ({ item, language, index }: Props) => {
  const { t } = useTranslation();

  // TODO memo?
  const currentLocalizationData = item.localizations.find(
    ({ locale }) => locale === language
  );

  return (
    <Delay wait={(index + 1) * 190 + 280}>
      <div className="project__item">
        <GraphImg
          image={item.image}
          alt={item.title}
          className="project__image"
        />

        <div className="project__content">
          <section className="project__main">
            <div className="project__header">
              <h3 className="project__title">{item.title}</h3>

              {item.year && <time className="project__time">{item.year}</time>}
            </div>

            <p className="project__description">
              {currentLocalizationData?.description}
            </p>
          </section>

          <footer className="project__footer">
            {item.technologies && (
              <ul className="project__technologies">
                {item.technologies.map((technology) => (
                  <li key={technology.id}>
                    <GraphImg image={technology.image} alt={technology.name} />
                  </li>
                ))}
              </ul>
            )}

            <div className="project__links">
              {item.srcLink && (
                // TODO target blank?
                <a href={item.srcLink} aria-label={t('labels.preview.source')}>
                  {/* TODO register icon */}
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}

              {item.liveLink && (
                // TODO target blank?
                <a href={item.liveLink} aria-label={t('labels.preview.live')}>
                  <FontAwesomeIcon icon="eye" />
                </a>
              )}
            </div>
          </footer>
        </div>
      </div>
    </Delay>
  );
};
