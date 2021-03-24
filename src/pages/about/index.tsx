import React from 'react';
import Delay from 'react-delay';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from '../../components/seo';
import Title from '../../components/title';
import Content from '../../components/content';
import Paragraph from '../../components/paragraph';

import './about.scss';

const About = ({ data }: any) => {
  const { t } = useTranslation();

  return (
    <article>
      <SEO title={t('about.title')} />

      <Title>{t('about.title')}</Title>

      <Content className="about">
        <div className="image__container">
          <Delay wait={520}>
            <figure>
              <CSSTransition in appear timeout={1000} classNames="image">
                <StaticImage
                  src={data.gravatar.url}
                  alt={t('about.profileImageAlt')}
                />
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
      </Content>
    </article>
  );
};

export const query = graphql`
  query About {
    gravatar(email: { eq: "biesiadajakub@icloud.com" }) {
      url
    }
  }
`;

export default About;
