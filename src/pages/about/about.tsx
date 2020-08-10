import React from 'react';
import Delay from 'react-delay';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import Img, { FluidObject } from 'gatsby-image';

import SEO from '../../components/seo';
import Title from '../../components/title';
import Content from '../../components/content';
import Paragraph from '../../components/paragraph';

import { AboutQuery } from '../../../graphql-types';

interface Props {
  readonly data: AboutQuery;
}

const About: React.FC<Props> = ({ data }) => {
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
                {data.image && (
                  <Img
                    fluid={data.image.childImageSharp!.fluid as FluidObject}
                  />
                )}
              </CSSTransition>
            </figure>
          </Delay>
        </div>

        <div className="content__container">
          {t<string[]>('about.content', { returnObjects: true }).map(
            (item, index) => (
              <Paragraph key={index} content={item!} index={index} />
            )
          )}
        </div>
      </Content>
    </article>
  );
};

export const query = graphql`
  query About {
    image: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 360, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default About;
