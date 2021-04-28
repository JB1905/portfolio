import React from 'react';
import Delay from 'react-delay';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { StaticImage } from 'gatsby-plugin-image';

import Page from '../../components/page';
import Paragraph from '../../components/paragraph';

import './about.scss';

const PROFILE_IMAGE_URL = '../../images/me.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    // TODO add common class name for all page
    <Page title={t('about.title')} className="about">
      <div className="image__container">
        <Delay wait={520}>
          <figure>
            <CSSTransition in appear timeout={1000} classNames="image">
              <StaticImage src={PROFILE_IMAGE_URL} alt="Jakub Biesiada" />
            </CSSTransition>
          </figure>
        </Delay>
      </div>

      <div className="content__container">
        {(t('about.content', { returnObjects: true }) as string[]).map(
          (item, index) => (
            <Paragraph key={index} content={item} index={index} />
          )
        )}
      </div>
    </Page>
  );
};

export default About;
